import * as React from 'react'
import { render } from 'react-dom'
import ButtonExamples from '../design-system/components/Button.examples'

class Document extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      {ButtonExamples.map(e => e.component)}
      </div>
    )
  }
}

render(<Document />, document.getElementById('app'))

