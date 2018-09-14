import * as React from 'react'
import { render, Artboard } from 'react-sketchapp'
import ButtonExamples from '../design-system/components/Button.examples'

const Document = ({children}) => (
  <Artboard
    name="Buttons"
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: (150 + 8) * 2,
    }}
  >
    {children}
  </Artboard>
);

export default function(context) {
  render(<Document>
    {ButtonExamples.map(e => e.component)}
  </Document>, context.document.currentPage());
}
