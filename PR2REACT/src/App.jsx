import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const[name, setName] = useState(['hello', 'world'])

  return (
    <div className='App'>
      <h1>{counter}</h1>
      <h1>{name}</h1>
      <button onClick={()=>setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default App
