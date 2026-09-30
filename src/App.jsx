import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gradient-to-r from-black via-blue-800 to-black min-h-screen flex flex-col items-center justify-center text-white text-center'>
      <div className = 'flex mb-12'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-25 h-25" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-25 h-25 animate-spin" style={{animationDuration: '10s'}} alt="React logo" />
        </a>
     </div>
      <h1 className='text-4xl font-bold mb-5'>Vite + React</h1>
      <h3>Rasyid Risvanto S</h3>
      <div className="card text-gray-500 text-sm ">
        <button className = 'text-neutral-600 bg-white px-4 py-2 rounded-2xl text-xl mt-10 mb-10'onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-neutral-400 mb-5'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App
