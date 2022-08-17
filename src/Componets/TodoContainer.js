import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Account from "./Account";

const TodoContainer = () => {
    const [todos, setTodos] = useState([
        {
            text: "Learn React is Easy",
            isCompleted: false
        },
        {
            text: "Meeting Is over",
            isCompleted: false
        },
        {
            text: "Task Complited",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (
        <div>
             <Account />
            <div className="col-md-12 app">
                <div className="todo-list">
                <h1 className='head '>This is Our Todo-List</h1>
                <TodoForm addTodo={addTodo} />
                    {todos.map((todo, index) => (
                        <TodoList
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )


}

export default TodoContainer