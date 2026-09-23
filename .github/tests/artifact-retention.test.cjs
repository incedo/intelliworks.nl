const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const yaml = fs.readFileSync(path.join(__dirname, '../workflows/artifact-retention.yml'), 'utf8');
const source = yaml.split('          script: |\n')[1].split('\n').map(l => l.slice(12)).join('\n');
const execute = new (Object.getPrototypeOf(async function () {}).constructor)('github', 'context', 'core', source);
const run = (id, extra = {}) => ({ id, run_number: id, workflow_id: 10, status: 'completed', conclusion: 'success', updated_at: '2026-01-01T00:00:00Z', ...extra });
const artifact = (id, runId, extra = {}) => ({ id, workflow_run: { id: runId }, expired: false, ...extra });
async function simulate(runs, artifacts, options = {}) {
  const deleted = [];
  const actions = {
    listArtifactsForRepo: 'artifacts', listJobsForWorkflowRun: 'jobs',
    getWorkflowRun: async ({ run_id }) => {
      if (options.readError === run_id) throw new Error('API unavailable');
      return { data: runs.find(r => r.id === run_id) };
    },
    deleteArtifact: async ({ artifact_id }) => { deleted.push(artifact_id); if (options.deleteError) throw { status: options.deleteError }; }
  };
  const github = { rest: { actions }, paginate: async kind => kind === 'artifacts' ? artifacts : (options.jobs || []) };
  const context = { repo: { owner: 'test', repo: 'test' }, payload: { workflow_run: options.trigger || runs[0] } };
  await execute(github, context, { info: () => {} });
  return deleted;
}
test('keeps all files from three latest builds, independently of API order', async () => {
  assert.deepEqual(await simulate([run(5), run(2), run(4), run(3), run(1)], [artifact(20, 2), artifact(50, 5), artifact(40, 4), artifact(41, 4), artifact(30, 3), artifact(10, 1)]), [20, 10]);
});
test('does not delete other workflows, active builds, expired or unassociated artifacts', async () => {
  assert.deepEqual(await simulate([run(5), run(4), run(3), run(2, { workflow_id: 11 }), run(1, { status: 'in_progress' })], [artifact(5, 5), artifact(4, 4), artifact(3, 3), artifact(2, 2), artifact(1, 1), artifact(6, 6, { expired: true }), { id: 7 }]), []);
});
test('no new upload preserves previous good artifacts', async () => {
  assert.deepEqual(await simulate([run(5), run(4), run(3), run(2), run(1)], [artifact(4, 4), artifact(3, 3), artifact(2, 2), artifact(1, 1)]), []);
});
test('optional upload failure preserves previous builds even if workflow succeeds', async () => {
  assert.deepEqual(await simulate([run(4), run(3), run(2), run(1)], [artifact(4, 4), artifact(3, 3), artifact(2, 2), artifact(1, 1)], { jobs: [{ steps: [{ conclusion: 'failure' }] }] }), []);
});
test('failed trigger never deletes artifacts', async () => {
  assert.deepEqual(await simulate([run(4), run(3), run(2), run(1)], [artifact(4, 4), artifact(3, 3), artifact(2, 2), artifact(1, 1)], { trigger: run(4, { conclusion: 'failure' }) }), []);
});
test('retains recent failed reports; deletes older failed reports without counting them as successes', async () => {
  assert.deepEqual(await simulate([run(5), run(4), run(3), run(2, { conclusion: 'failure', updated_at: new Date().toISOString() }), run(1, { conclusion: 'cancelled' })], [artifact(5, 5), artifact(4, 4), artifact(3, 3), artifact(2, 2), artifact(1, 1)]), [1]);
});
test('API read failure aborts before the deletion phase', async () => {
  await assert.rejects(simulate([run(4), run(3), run(2), run(1)], [artifact(4, 4), artifact(3, 3), artifact(2, 2), artifact(1, 1)], { readError: 1 }), /API unavailable/);
});
test('already expired deletions are tolerated but permission errors are not', async () => {
  const runs = [run(4), run(3), run(2), run(1)];
  const artifacts = runs.map(r => artifact(r.id, r.id));
  assert.deepEqual(await simulate(runs, artifacts, { deleteError: 404 }), [1]);
  await assert.rejects(simulate(runs, artifacts, { deleteError: 403 }));
});
