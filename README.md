# Vite Plugin for Playground Elements

Configuration to allow working with the [playground-elements](https://github.com/google/playground-elements) using Vite.

From the docs, we need to add a new url for `sandboxBaseUrl` and also copy some files:
- https://github.com/google/playground-elements#other
- https://github.com/google/playground-elements#sandbox-security

This repo will create a `/sandbox/` context for development and will copy `playground-elements/playground-service-worker.js` and `playground-elements/playground-service-worker-proxy.html` to `/sandbox/` folder for production build.

## Install (not yet published)

> Requires Vite 3.1+

```shell
npm i vite-plugin-playground-elements -D

# yarn
yarn add vite-plugin-playground-elements -D

# pnpm
pnpm add vite-plugin-playground-elements -D
```

## Usage

```ts
// vite.config.js / vite.config.ts
import { VitePlaygroundElements } from 'vite-plugin-playground-elements'

export default {
  plugins: [
    VitePlaygroundElements(/* options */)
  ]
}
```

Check out the node type declarations [types.ts](./src/types.ts) to configure the plugin.

Check out the client type declarations [client.d.ts](./client.d.ts) for built-in client support:
- `virtual:pg-ide`: virtual module to get IDE configuration configured in the plugin

## Warnings

- Don't use private window in Chrome, it will break the service worker

## TODO

- Add `config (ProjectManifest)` option to `playground-ide` and review if we need to remove any options (modified for example)
- Add virtual for `playground-project` (??)
- Add virtual for `playground-tab-bar` (??)
- Add virtual for `playground-preview` (??)
- Add virtual for `playground-file-editor` (??)
- Add virtual for `playground-code-editor` (??)
- Add virtual for `playground-file-system-controls` (??)
- Add support for `import map` (??)

## License

MIT License © 2022-PRESENT [Joaquín Sánchez](https://github.com/userquin)
