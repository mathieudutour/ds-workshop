import * as React from 'react'
import { makeSymbol, injectSymbols } from 'react-sketchapp'
import ButtonExamples from '../design-system/components/Button.examples'

export default function(context) {
  ButtonExamples.forEach(e => makeSymbol(() => e.component, e.name))
  injectSymbols(context.document)
}
