import 'playground-elements'
import { ide } from 'virtual:pg-ide'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <playground-ide
    editableFileSystem="${ide.editableFileSystem}"
    lineNumbers="${ide.lineNumbers}"
    resizable="${ide.resizable}"
    sandboxBaseUrl="${ide.sandboxBaseUrl}">
        <script type="sample/html" filename="index.html">
<!doctype html>
<body>
  <script src="./index.js">&lt;/script>
</body>
        </script>
        <script type="sample/ts" filename="index.ts">
    document.body.textContent = 'Hello!';
        </script>
    </playground-ide>
`
