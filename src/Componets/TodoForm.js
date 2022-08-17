import React,{useState} from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("");
    // const [add, setAdd] = useState("")

    

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue(e.target.value);
    };


    return (
        <div  >
            {/* <h1 className='head'>Hello Add Your List</h1> */}
            <form onSubmit={handleSubmit} className="form-add " >
                <input
                    type="text"
                    className="input "
                    placeholder="Add Task"
                    value={value}
                    onChange={e => setValue(e.target.value)} 
                    
                />
                <button  className="btn"  onClick={handleSubmit}>+</button>
            </form>
        </div>
    )

}

export default TodoForm