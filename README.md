# Verbena vue template

<img src="public/favicon.svg" width="250"/>

This **template** have integrated some common purpose packages to help you start developing `Vue 3` project with `typescript`.

## ⚙️ Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 🚀 Features

### 💠 Layout and CSS

- [tailwindcss](https://tailwindcss.com/) with [container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries) and [typography](https://tailwindcss.com/docs/typography-plugin)

- [daisyui](https://daisyui.com/)

### 🆒 Font

- [fontsource inter font](https://fontsource.org/fonts/inter)

### 💥 Icon

- [heroicons](https://heroicons.com/)

### 🍍 State management

- [pinia](https://pinia.vuejs.org/)

### 🌏 Locale

- [vue-i18n](https://vue-i18n.intlify.dev/)

### 🧭 Utility

- [vueuse](https://vueuse.org/)

### 🦅 Testing

- E2e test - [playwright](https://playwright.dev/)

- Unit test - [vitest](https://vitest.dev/) + [vue/test-utils](https://test-utils.vuejs.org/guide/)

- Unit test coverage report - `vitest/coverage-v8`

### 🚎 Component loader

- `svg` - [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader)

- `markdown` - [unplugin-vue-markdown](https://github.com/unplugin/unplugin-vue-markdown)

```js
// Markdown files default load location `src/contents/**`
```

### 🤖 Github CI actions

- Unit test

- E2e test

- Coding format and lint check

## ⚡ Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with `Vitest`

```sh
npm run test:unit
```

### Run Unit Tests with `Vitest` and view test coverage report

```sh
npm run test:unit:coverage
```

### Run End-to-End Tests with `Playwright`

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format coding style with [Prettier](https://prettier.io/)

```sh
npm run format
```

## 🖋️ Note

- Favicon <img src="src/assets/icons/site-logo.svg" width="25"/> and `github` icon <img src="src/assets/icons/github.svg" width="25"/> is from [Bootstrap](https://icons.getbootstrap.com/)

- Favicon <img src="src/assets/icons/site-logo.svg" width="25"/> svg file generate by `realfavicongenerator.net` compress by `iloveimg.com`

## 🗒️ License

[MIT License](https://github.com/silveryiris/verbena-vue-template/blob/master/LICENSE) © 2023-PRESENT [Wen Wei , Chang](https://github.com/silveryiris)
