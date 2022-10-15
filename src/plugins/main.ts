import type { Plugin } from 'vite'
import type { PlaygroundElementsContext } from '../context'
import { resolveOptions } from '../options'

export const MainPlugin = (ctx: PlaygroundElementsContext): Plugin => {
  return {
    name: 'vite-playground-elements:main',
    enforce: 'pre',
    async configResolved(config) {
      ctx.viteConfig = config
      ctx.options = await resolveOptions(ctx.userOptions)
    },
  }
}
