import { promises as fs } from 'fs'
import type { Plugin } from 'vite'
import {
  playgroundTSSWPath,
  playgroundVirtualTSSW,
} from '../constants'
import type { PlaygroundElementsContext } from '../context'

export const DevPlugin = (ctx: PlaygroundElementsContext): Plugin => {
  return {
    name: 'vite-playground-elements:dev',
    enforce: 'pre',
    apply: 'serve',
    resolveId(id) {
      if (id.endsWith(playgroundTSSWPath))
        return playgroundVirtualTSSW

      return undefined
    },
    async load(id) {
      if (id === playgroundVirtualTSSW)
        return await fs.readFile('node_modules/playground-elements/playground-typescript-worker.js', 'utf-8')

      return undefined
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const uri = req.url
        let data: [string, string] | undefined

        if (uri === ctx.options.pgSw) {
          data = [
            'application/javascript',
            await fs.readFile('node_modules/playground-elements/playground-service-worker.js', 'utf-8'),
          ]
        }

        if (uri === ctx.options.pgSWProxyHtml) {
          data = [
            'text/html',
            await fs.readFile('node_modules/playground-elements/playground-service-worker-proxy.html', 'utf-8'),
          ]
        }

        if (data) {
          res.setHeader('Content-Type', data[0])
          res.end(data[1])
          return
        }

        next()
      })
    },
  }
}
