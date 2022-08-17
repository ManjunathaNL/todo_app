import React from "react";
import './Style/Todo.css'

const TodoList = ({ todo, index, completeTodo, removeTodo })=>
{
    return(
        <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} >
          <div>
          <input  className="check-list" type="checkbox" onClick={() => completeTodo(index)} />
          {todo.text}
          </div>
        <div>
          <button className="btn-list"  onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
      
    )
}

export default TodoList