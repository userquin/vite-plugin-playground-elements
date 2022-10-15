import type { PlaygroundElementsConfig } from './types'

export const normalizeSandboxUrl = (options: PlaygroundElementsConfig) => {
  let { sandboxBaseUrl = '/sandbox/' } = options
  if (!sandboxBaseUrl.endsWith('/'))
    sandboxBaseUrl += '/'

  if (!sandboxBaseUrl.startsWith('/'))
    sandboxBaseUrl = `/${sandboxBaseUrl}`

  return sandboxBaseUrl
}
