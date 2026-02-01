import React, { useState } from 'react'
import { useTodo } from '../context';

function Todoitem({todo}) {
    const{deleteToDo,toggleToDo,updateToDo} = useTodo()
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const  [todoMsg, setTodoMsg]= useState(todo.todo)


    const editTodo= ()=>{
        updateToDo(todo.id, {...todo, todo:todoMsg})
        setIsTodoEditable(false)
    }

    const toggleComplete = ()=>{
        toggleToDo(todo.id )
    }

  return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.isCompleated ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isCompleated}
                onChange={toggleComplete}
            />
            {isTodoEditable ? (
            <textarea
                className={`border outline-none w-full bg-transparent rounded-lg px-2 resize-none min-w-0 ${
                todo.isCompleated ? "line-through" : ""
                }`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                rows={2}
            />
            ) : (
            <p
                className={`flex-1 min-w-0 wrap-break-word whitespace-normal ${
                todo.isCompleated ? "line-through" : ""
                }`}
            >
                {todoMsg}
            </p>
            )}

            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.isCompleated) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.isCompleated}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default Todoitem