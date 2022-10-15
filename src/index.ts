import type { Plugin } from 'vite'
import type { PlaygroundElementsOptions } from './types'
import { DevPlugin } from './plugins/dev'
import { BuildPlugin } from './plugins/build'
import { IdePlugin } from './plugins/ide'
import { createContext } from './context'
import { MainPlugin } from './plugins/main'

export const VitePlaygroundElements = (options: Partial<PlaygroundElementsOptions> = {}): Plugin[] => {
  const ctx = createContext(options)
  return [
    MainPlugin(ctx),
    DevPlugin(ctx),
    IdePlugin(ctx),
    BuildPlugin(ctx),
  ]
}
