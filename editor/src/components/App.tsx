import { useState } from 'react'
import {
  Container
} from '@styles/styles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <div>text editor</div>
    </Container>
  )
}

export default App
