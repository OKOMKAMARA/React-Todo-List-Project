import React, { useState } from 'react'
import {GrEdit} from "react-icons/gr"
import {RiDeleteBin5Fill} from "react-icons/ri"
import TodoForm from './TodoForm'

const TodoList = ({todos, updateTodo, removeTodo}) => {
    const [edit, setEdit ] = useState({
        id: null,
        value: ""

    })

    const submitUpdate = (value) => {
           updateTodo(edit.id, value) 
            setEdit({
                id: null,
                value: "" 
    })
}  
if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
}
  return (
    <div>
      {todos.map((todo, index) => (
        <>
        <div key={index}>
           <div key={todo.id}>{todo.text}</div>
        </div>
        <div>
           <RiDeleteBin5Fill
           onClick={() => removeTodo(todo.id)} />
            <GrEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})} /> 
        </div>
        </>
      ))}
    </div>
  )
}

export default TodoList
