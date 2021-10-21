# Timely Deploy Action

[![Build status][build-image]][build-url]
[![Build coverage][coverage-image]][coverage-url]

> GitHub Action for creating deployments using Timely Deploy.

## Requirements

Install the [GitHub App](https://github.com/apps/timely-deploy) for the desired repo or organization. The app is used to trigger deployments from [@timely-deploy](https://github.com/timely-deploy) instead of using your personal user token directly. A GitHub token is provided to this action so Timely Deploy can verify the commit exists and come from the action before triggering a deployment.

## Example

Trigger a deployment from any push to GitHub:

```yaml
name: CI
on:
  - push
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: timely-deploy/action@v1
        with:
          token: ${{ github.token }}
          environment: production
```

See [ci.yml](.github/workflows/ci.yml) for an example of triggering a deployment from GitHub Actions.

## License

MIT

[build-image]: https://img.shields.io/github/workflow/status/timely-deploy/action/CI/main
[build-url]: https://github.com/timely-deploy/action/actions/workflows/ci.yml?query=branch%3Amain
[coverage-image]: https://img.shields.io/codecov/c/gh/timely-deploy/action
[coverage-url]: https://codecov.io/gh/timely-deploy/action
