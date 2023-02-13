import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
    const [todos, setTodos ] = useState([
        //  {text: "Learn React", isComplete: false},
        // {text: "Learn Javascript", isComplete: false},
        // {text: "Learn Python", isComplete: false}
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
    const completeTodo = (id) => {
            let updatedTodo = todos.map((todo) => {
               if(todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
               }
               return todo
            });
            setTodos(updatedTodo)
    }
  return (
    <div>
      <h1 className="header">Add your Plan for Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <TodoList 
      todos={todos} 
      updateTodo={updateTodo}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
      />
    </div>
  )
}

export default Todo
