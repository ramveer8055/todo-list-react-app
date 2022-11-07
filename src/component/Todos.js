import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-5'>Todos List</h3>
      {props.todos.length === 0 && <h1>No List item!</h1>}
      {
        props.todos.map((todo) => {
          return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
        })
      }
    </div>
  )
}

export default Todos