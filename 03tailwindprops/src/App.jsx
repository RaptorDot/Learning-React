// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './assets/components/card'
import './App.css'

function App() {
  let myObj = {
    username: 'Debasish',
    age: 18
  }
  return (
    <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3' >tailwind test</h1>
    <Card username = 'Debasish' />
    <Card username='UserOne'/>
    </>
  )
}

export default App
