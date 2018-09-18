import * as React from 'react'
import { render } from 'react-dom'

class Document extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        It's alive 🙌
      </div>
    )
  }
}

render(<Document />, document.getElementById('app'))

