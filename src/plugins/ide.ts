import type { Plugin } from 'vite'
import { playgroundVirtualIde } from '../constants'
import type { PlaygroundElementsContext } from '../context'

export const IdePlugin = (ctx: PlaygroundElementsContext): Plugin => {
  return {
    name: 'vite-playground-elements:ide',
    enforce: 'pre',
    resolveId(id) {
      if (id === 'virtual:pg-ide')
        return playgroundVirtualIde

      return undefined
    },
    load(id) {
      if (id === playgroundVirtualIde)
        return `export const ide = ${JSON.stringify(ctx.options.ide)}`

      return undefined
    },
  }
}
