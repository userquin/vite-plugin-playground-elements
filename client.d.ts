declare module 'virtual:pg-ide' {
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

  export const ide: PlaygroundElementsIde
}
