import { useState } from "react";
import { TodoProvider } from "../context";
import { useEffect } from "react";
import "./index"
import TodoForm from "./TodoForm";
import Todoitem from "./Todoitem"

import React from 'react'

function Todo_provider() {
  const [todos ,settodos]=useState([])

  const addToDo = (todo)=>{
    settodos((prev)=>[...prev,{id: Date.now() , ...todo}])
  }

  const updateToDo=(id,todo)=>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo:prevTodo)))
  }

  const deleteToDo= (id)=>{
    settodos((prev)=>prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleToDo= (id)=>{
    settodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo , isCompleated : !prevTodo.isCompleated} : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length >0 ){ 
      settodos(todos)
    }
  },[])

  useEffect(()=> { 
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (

   <div className="bg-[#c3cfaa66] w-full  flex justify-center rounded-2xl ">
  <div className="w-full max-w-2xl px-4 ">
    <TodoProvider value={{ todos, addToDo, deleteToDo, updateToDo, toggleToDo }}>
      
      <div className="shadow-md rounded-lg px-4 py-3 text-black ">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>

        <div className="mb-4">
          <TodoForm />
        </div>

        <div className="flex flex-wrap gap-y-3 overflow-y-auto h-100 no-scrollbar">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <Todoitem todo={todo} />
            </div>
          ))}
        </div>
      </div>

    </TodoProvider>
  </div>
</div>

  );
}

export default Todo_provider