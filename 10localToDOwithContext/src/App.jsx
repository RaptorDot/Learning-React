import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from './contexts';
import TodoItem from './components/TodoItem';


function App() {
  const [todo, setTodo] = useState([]);

   const addtodo = (todo)=>{
          setTodo((p)=>[{id: Date.now() ,...todo},...p])
    }
    const updateTodo = (id ,todo)=>{
      setTodo((prev)=>prev.map((prevT)=>prevT.id===id? todo: prevT))
    }
    const deleteTodo = (id)=>{
        setTodo((prev)=>prev.filter((todo)=>todo.id!==id))
    }
    const toggleComplete = (id)=>{
        setTodo((prev)=>prev.map((todo)=>todo.id==id? {...todo , isCompleated: !todo.isCompleated}: todo))
    }

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
  

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
                {todos.map((todos)=>(
                <div key = {todo.id} className="w-full">
                  <TodoItem todo={todo}></TodoItem>
                </div>
              ))}
            </div>
        </div>
    </div>
  </TodoContextProvider>
  )
}

export default App
