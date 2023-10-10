import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-4xl text-red-600'>Hello</h1>
        <h1 className=' text-3xl text-blue-600'>Welcome to Zander's Portfolio</h1>
        <h1 className='text-2xl text-green-400'>Coming Soooooon.....</h1>
      </div>
    </>
  )
}

export default App
