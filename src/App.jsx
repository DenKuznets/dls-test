import { useState } from 'react'
import Header from './components/Header'
import GlobalStyle from './js/globalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  )
}

export default App
