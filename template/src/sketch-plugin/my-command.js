import * as React from 'react'
import { render, Artboard } from 'react-sketchapp'
import Button from '../design-system/components/Button'

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
    <Button text="Normal button" />
    <Button primary text="Primary button" />
  </Document>, context.document.currentPage());
}
