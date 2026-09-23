# Build artifact retention

After a successful artifact-producing workflow finishes, `artifact-retention.yml`
keeps the complete artifact sets from its three newest successful runs, across
branches. Runs without available artifacts do not consume a slot. Older successful
sets are removed; failed/cancelled sets are removed after one day when a subsequent
successful upload triggers cleanup. Workflow history and logs remain available.

Cleanup skips a run with no uploaded artifacts or any failed step (including a
non-blocking upload failure). This preserves previous good builds when storage is
full. Active runs and other workflows are excluded. The cleanup uses GitHub API
metadata only and never checks out or executes code from the triggering build.

Build/report uploads expire after at most seven days as a fallback. GitHub Pages
keeps its existing one-day expiry. Therefore fewer than three builds may remain
when builds are infrequent. These limits apply to new uploads; existing expiry
settings are unchanged. Disabled workflows remain disabled.

The three-build policy is a count limit, not a size limit. Leave room for the next
upload and all workflows sharing the account's artifact allowance. Cleanup cannot
undo storage already accrued in the current billing cycle or unblock an exhausted
monthly budget immediately. Self-hosted builds still consume GitHub artifact
storage when uploading reports or packages there.

Validate cleanup safety locally:

```sh
node --test .github/tests/artifact-retention.test.cjs
```
