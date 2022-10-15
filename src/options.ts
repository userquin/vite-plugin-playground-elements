import type { PlaygroundElementsIde, PlaygroundElementsOptions, ResolvedPlaygroundElementsOptions } from './types'
import { playgroundSW, playgroundSWProxyHtml } from './constants'

export function resolveOptions(options: PlaygroundElementsOptions): ResolvedPlaygroundElementsOptions {
  const { ide: userIde = {} } = options

  const defaults: PlaygroundElementsIde = {
    lineNumbers: false,
    lineWrapping: false,
    editableFileSystem: false,
    resizable: false,
    sandboxBaseUrl: '/sandbox/',
    pragmas: 'on',
    modified: false,
    htmlFile: 'index.html',
    noCompletions: false,
  }

  const ide: PlaygroundElementsIde = Object.assign({}, defaults, userIde)

  if (!ide.sandboxBaseUrl.endsWith('/'))
    ide.sandboxBaseUrl += '/'

  if (!ide.sandboxBaseUrl.startsWith('/'))
    ide.sandboxBaseUrl = `/${ide.sandboxBaseUrl}`

  return {
    ide,
    pgSw: `${ide.sandboxBaseUrl}${playgroundSW}`,
    pgSWProxyHtml: `${ide.sandboxBaseUrl}${playgroundSWProxyHtml}`,
  }
}
