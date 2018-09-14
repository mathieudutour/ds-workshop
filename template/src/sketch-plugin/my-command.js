import * as React from 'react'
import { makeSymbol, injectSymbols } from 'react-sketchapp'
import sketch from 'sketch'
import ButtonExamples from '../design-system/components/Button.examples'

export default function(context) {
  const document = new sketch.Document()

  ButtonExamples.forEach(e => makeSymbol(() => e.component, e.name, document.sketchObject))
  injectSymbols(document.sketchObject)

  const path = context.scriptPath.split('Contents/Sketch/')[0] + context.command.identifier() + '.sketch'

  document.save(path, err => {
    if (err) {
      console.error(err)
    }

    document.close()

    sketch.Library.getLibraryForDocumentAtPath(path)

    sketch.UI.message('Library added 🙌')
  })
}
