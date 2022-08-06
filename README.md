# typescript-lib-template

[![build](https://github.com/ibara1454/typescript-lib-template/actions/workflows/build.yml/badge.svg)](https://github.com/ibara1454/typescript-lib-template/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/ibara1454/typescript-lib-template/branch/master/graph/badge.svg?token=BH5GQLN636)](https://codecov.io/gh/ibara1454/typescript-lib-template)

## Development Setup

### Prerequisites

Install [Node.js](https://nodejs.org/) with version `16.y.z` or above.

### Setting up the project

Install all dependencies:

```bash
npm install
```

Run a production build:

```bash
npm run build
# This will generates files under `/dist` directory
```

## Changelog

[CHANGELOG.md](./CHANGELOG.md)

## Contributing

### Commit Message Format

Your commit messages should satisfy the [AngularJS commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).
Please take a look at it.

In most cases, you don't need to check whether your commit messages follow the rules or not.
Since we registered a [`commit-msg`](./.husky/commit-msg) hook to trigger [commitlint](https://commitlint.js.org/), which will check your commit messages automatically.

## Releasing

Since we are using [semantic-release](https://github.com/semantic-release/semantic-release) to automatically create release pages, git tags, and bump versions after merging a commit to master branch, no manual tasks are needed.

## License

[MIT](./LICENSE) license.

Copyright 2021 Chiajun Wang (ibara1454).
