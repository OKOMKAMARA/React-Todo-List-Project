import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
    const [todos, setTodos ] = useState([
        {text: "Learn React", isCompleted: false},
        {text: "Learn Javascript", isCompleted: false},
        {text: "Learn Python", isCompleted: false}
    ])

    const addTodo = (todo) => {
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
          console.log(...todos);
    }
    const updateTodo = (todoId, newValue) => {
          setTodos((prev) => {
            prev.map(item => (item.Id === todoId ? newValue: item))
          })
    }
    const removeTodo = (id) => {
        const removedArg = [...todos].filter((todo) => todo.id !== id);

        setTodos(removedArg)
    }
  return (
    <div>
      <h1 className="header">Add your Plan for Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <TodoList 
      todos={todos} 
      updateTodo={updateTodo}
      removeTodo={removeTodo}/>
    </div>
  )
}

export default Todo
