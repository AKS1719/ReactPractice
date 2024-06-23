import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-600 p-3 rounded-xl'>Learning about Redux toolkit </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
