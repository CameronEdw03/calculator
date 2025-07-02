import { useState } from 'react'
import Home from './Home.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Home />
   </div>
  )
}

export default App
