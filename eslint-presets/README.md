# This package is published from a monorepo

Check https://github.com/DaniFoldi/linters for more details.

## Setup

### Standard

`npm i -D @danifoldi/eslint-plugin-eslint-presets eslint eslint-plugin-import eslint-plugin-unicorn`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/standard' ]
}
```

### Jest

`npm i -D @danifoldi/eslint-plugin-eslint-presets eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-jest`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/jest' ]
}
```

### Vitest

`npm i -D @danifoldi/eslint-plugin-eslint-presets eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vitest`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/vitest' ]
}
```
### Ts

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin @typescript-eslint/parser`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/ts' ]
}
```
### Ts-jest

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/ts-jest' ]
}
```

### Comet

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin @typescript-eslint/parser`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/comet' ]
}
```

### Comet-jest

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/comet-jest' ]
}
```

### Vue

`npm i -D @danifoldi/eslint-plugin-eslint-presets eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vue`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/vue' ]
}
```

### Vue-ts

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/vue-ts' ]
}
```

### Nuxt

`npm i -D @danifoldi/eslint-plugin-eslint-presets eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vue eslint-plugin-nuxt`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/nuxt' ]
}
```

### Nuxt-ts

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vue eslint-plugin-nuxt @typescript-eslint/eslint-plugin @typescript-eslint/parser`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/nuxt-ts' ]
}
```

### Nuxt-ts-vitest

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vue eslint-plugin-nuxt @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vitest`

.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/nuxt-ts-vitest' ]
}
```

### Paintbrush

`npm i -D @danifoldi/eslint-plugin-eslint-presets typescript eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-vue eslint-plugin-nuxt @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-vitest`


.eslintrc.js
```js
module.exports = {
  extends: [ 'plugin:@danifoldi/eslint-presets/paintbrush' ]
}
```

## Node

If you use node.js specific features, you can add one of the following presets to `extends` after the normal preset:
- `plugin:@danifoldi/eslint-presets/node`
- `plugin:@danifoldi/eslint-presets/node-cjs`

## Semicolons

They are useless, but if you really want it, add `plugin:@danifoldi/eslint-presets/semi` to `extends` after the normal preset.

## Sorting objects and interfaces

Generally the rules do have a purpose, however if for whatever reason you want to disable them, add `plugin:@danifoldi/eslint-presets/unsorted` or `plugin:@danifoldi/eslint-presets/unsorted-ts` to your `extends` after the normal preset.

## Contributing

I have not tested all combinations, but they _should_ work. If they don't, feel free to open an issue or PR.
