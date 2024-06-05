/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aS2eyuFaF54
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({
    time: "",
    title: "",
    description: "",
  })
  const handleAddTodo = () => {
    if (newTodo.title.trim() !== "") {
      setTodos([...todos, newTodo])
      setNewTodo({ time: "", title: "", description: "" })
    }
  }
  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos]
    updatedTodos.splice(index, 1)
    setTodos(updatedTodos)
  }
  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }
  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <Input
            type="text"
            placeholder="Time"
            value={newTodo.time}
            onChange={(e) => setNewTodo({ ...newTodo, time: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Title"
            value={newTodo.title}
            onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          />
        </div>
        <Textarea
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 ${todo.completed ? "opacity-50 line-through text-gray-500 dark:text-gray-400" : ""
              }`}
          >
            <Checkbox checked={todo.completed} onChange={() => handleToggleTodo(index)} />
            <div className="space-y-1">
              <div className="font-medium">{todo.title}</div>
              <div className="text-gray-500 dark:text-gray-400">
                {todo.time} - {todo.description}
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleDeleteTodo(index)}>
              <Trash2Icon className="w-5 h-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Trash2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}
