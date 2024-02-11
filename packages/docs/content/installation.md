---
h1: Installation
title: Install Pushword in a few seconds (automatic installer)
parent: homepage
toc: true
---

## Requirements

- **PHP** >=8.1
- **PHP extensions** : dom, curl, libxml, mbstring, zip, pdo, sqlite, pdo_sqlite, bcmath, soap, intl, gd, imagick, exif, iconv, fileinfo
- **Composer** (#[how to install composer](https://getcomposer.org/download/))
- **Node** (>= 16.20.2, see [nvm to easily install a node version up to date](https://github.com/nvm-sh/nvm) - only tested with 16.20.2)
- **yarn** (#[how to install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable))

_Note_ : Node and Yarn may not be required in the near future, [thanks to asset mapper](https://symfony.com/doc/current/frontend/asset_mapper.html).

## Automatic installer via composer

```shell
composer create-project pushword/new pushword
```

That's it ! You can still configure an app or directly launch a PHP Server :

```shell
cd pushword;
php bin/console pushword:new
php -S 127.0.0.1:8004 -t public/
# OR symfony server:start -d
```

## _Recommended Extesions_ to get Pushword Classic

By running the following command, it will install a few extensions to have a **classic** installation.

```shell
composer req pushword/admin pushword/admin-block-editor pushword/page-scanner pushword/static-generator pushword/template-editor pushword/version

# More specific
composer req pushword/page-update-notifier
composer req pushword/advanced-main-image
composer req pushword/conversation

```

## Create the first user

```
php bin/console pushword:user:create
```

## Next

- Configure the [colors and display](/themes) (also see [automatic tailwind run after page update](/manage-assets)).
- Supercharge Pushword with [extensions](/extensions) or **custom development**

## Manual installation

You can use `composer require pushword/core` in an existing Symfony Project. Have a look into `vendor/pushword/core/install.php` to finish manually the installation.

## Update

Stay up to date with only one command :

```
composer update
```

<!-- for postcss... -->
<pre style="display:none"><code>...</code></pre>
