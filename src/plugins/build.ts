import { promises as fs } from 'fs'
import type { Plugin } from 'vite'
import type { PlaygroundElementsContext } from '../context'

export const BuildPlugin = (ctx: PlaygroundElementsContext): Plugin => {
  let outputDir = 'dist'

  return {
    name: 'vite-playground-elements:build',
    enforce: 'post',
    apply: 'build',
    configResolved(config) {
      outputDir = config.build.outDir
    },
    writeBundle: {
      sequential: true,
      order: 'post',
      async handler() {
        const sandboxBaseUrl = ctx.options.ide.sandboxBaseUrl
        await fs.mkdir(`${outputDir}${sandboxBaseUrl}`, { recursive: true })
        let code = await fs.readFile('node_modules/playground-elements/playground-service-worker.js', 'utf-8')
        await fs.writeFile(`${outputDir}${sandboxBaseUrl}playground-service-worker.js`, code, 'utf-8')
        code = await fs.readFile('node_modules/playground-elements/playground-service-worker-proxy.html', 'utf-8')
        await fs.writeFile(`${outputDir}${sandboxBaseUrl}playground-service-worker-proxy.html`, code, 'utf-8')
      },
    },
  }
}
