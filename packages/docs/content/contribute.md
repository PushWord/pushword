---
h1: Contribution and signaling issues
title: 'Contribute to Pushword : Documention, Core or Extension'
parent: homepage
toc: true
---

## Signaling an issue

Use the [github issue tracker](https://github.com/Pushword/Pushword/issues).

> This project is open source, and as such, the maintainers give their free time to build and maintain the source code
> held within. They make the code freely available in the hope that it will be of use to other developers. It would be
> extremely unfair for them to suffer abuse or anger for their hard work.

## Contribute

Contributions are **welcome**.

Please, send your contribution via a [github pull request](https://github.com/Pushword/Pushword/pulls) on [Puswhord/Puswhord](https://github.com/Pushword/Pushword).

The code is mainly organised in a mono-repo, learn more about the [code architecture](/architecture)

## Contribute to the documentation

The docs is inside the main repo, you will find write in markdown in [packages/docs/content](https://github.com/Pushword/Pushword/tree/main/packages/docs/content).

On each PR, the docs is compiled and published [pushword.piedweb.com] by a github action.

## Pull Requests

### New Features

When requesting or submitting new features, first consider to create a dedicated extension.

If your extension reply to an important community need, you can create a pull request to merge it in this Mono Repo. It will permit to maintain easily it compatibility in next Puswhord update. Moreover, extension will be tested at each commit on one of Pushword's package.

Else, consider create it own git repo and create a Pull Request on the doc to add a link to this fresh extension. The link will be accepted if your extension is well tested and fully functionnal.

### Coding standards

This project respect PSR-2 Coding standard. Before your pull-request, run `php-cs-fixer`.

```
composer format
```

### Tests

```
composer test

# and to test with --prefer-lowest
composer tests
```

### Other Requirements

This attention, not always respected by the main maintener, would be cool :

- **Add tests**

- **Document any change in behaviour** - Make sure the [documentation](../packages/docs/content/) are kept up-to-date.

- **Consider our release cycle** - We try to follow [SemVer v2.0.0](https://semver.org/). Randomly breaking public APIs is not an option.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please [squash them](https://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages) before submitting.

**Happy coding**!
