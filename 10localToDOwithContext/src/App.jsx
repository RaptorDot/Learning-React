import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './contexts';


function App() {
  const [todo, setTodo] = useState([]);

   const addtodo = (todo)=>{
          setTodo((p)=>[{id: Date.now() ,...todo},...p])
    }
    const updateTodo = (id ,todo)=>{
      setTodo((prev)=>prev.map((prevT)=>prevT.id===id? todo: prevT))
    }


  return (
  <TodoContextProvider value = {{todos, addtodo, updateTodo, deleteTodo, toggleComplete}} >
<div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
    </div>
  </TodoContextProvider>
  )
}

export default App
