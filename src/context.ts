import type { ResolvedConfig } from 'vite'
import type { PlaygroundElementsOptions, ResolvedPlaygroundElementsOptions } from './types'

export interface PlaygroundElementsContext {
  viteConfig: ResolvedConfig
  userOptions: Partial<PlaygroundElementsOptions>
  options: ResolvedPlaygroundElementsOptions
}

export function createContext(userOptions: Partial<PlaygroundElementsOptions>): PlaygroundElementsContext {
  return {
    userOptions,
    options: undefined!,
    viteConfig: undefined!,
  }
}
