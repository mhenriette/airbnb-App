import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-red-500 font-bold text-4xl' >Trial text is always 'Hellow world'</h1>

    </div>
  )
}

export default App
