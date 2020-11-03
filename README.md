## gql-info-to-select

![David](https://img.shields.io/david/noshadil/gql-info-to-select.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/noshadil/gql-info-to-select.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/noshadil/gql-info-to-select.svg)
![npm](https://img.shields.io/npm/dw/gql-info-to-select.svg)
![npm](https://img.shields.io/npm/dm/gql-info-to-select.svg)
![npm](https://img.shields.io/npm/dy/gql-info-to-select.svg)
![npm](https://img.shields.io/npm/dt/gql-info-to-select.svg)
![NPM](https://img.shields.io/npm/l/gql-info-to-select.svg)
![npm](https://img.shields.io/npm/v/gql-info-to-select.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/noshadil/gql-info-to-select.svg)
![npm collaborators](https://img.shields.io/npm/collaborators/gql-info-to-select.svg)

This module takes graphQL info object and returns prisma-clint's include object

# Installation

Using npm:

```shell
$ npm i gql-info-to-select
```

Note: add `--save` if you are using npm < 5.0.0

In Node.js:

```js
// Load the full build.
var infoSelect = require("gql-info-to-select");
var userIncludes = infoSelect.includes(info);

return ctx.prisma.user.findOne({
  where: { id: ctx.user.id },
  include: userIncludes,
});

```

```ts
// Load the full build.
var infoSelect = require("gql-info-to-select");
var userIncludes = infoSelect.includes(info);

return ctx.prisma.user.findOne({
  where: { id: ctx.user.id },
  include: userIncludes,
});

```
