export interface PlaygroundElementsIde {
  projectSrc?: string
  lineNumbers: boolean
  lineWrapping: boolean
  editableFileSystem: boolean
  resizable: boolean
  sandboxBaseUrl: string
  pragmas: 'on' | 'off' | 'off-visible'
  modified: boolean
  htmlFile: string
  noCompletions: boolean
}
export interface PlaygroundElementsOptions {
  /**
   * `playground-ide` options.
   *
   * @see https://github.com/google/playground-elements#playground-ide
   */
  ide?: Partial<PlaygroundElementsIde>
}

export interface ResolvedPlaygroundElementsOptions extends Omit<PlaygroundElementsOptions, 'ide'> {
  ide: PlaygroundElementsIde
  pgSw: string
  pgSWProxyHtml: string
}
