import React, { useState } from 'react';
import './Myedit.css'; 

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleChange(event) {
        setTodo(event.target.value)
    }

    function handleSubmit() {
        setTodos([...todos, todo])
        setTodo("")
    }

    function handleDelete(index) {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
        <div className="mainbox">
            <div className="todo-container">
                <h3>Todo Application - Efficient & Convenient</h3>
                <div className='middlebox'>
                    <input value={todo} onChange={handleChange} type='text' placeholder='Enter Todo' />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                {todos.length ? (
                    <div>
                        <h2>Your Todos :</h2>
                        {todos.map((todo, index) => (
                            <div key={index} className="todo-item">
                                <p style={{ display: 'inline' }}>{index + 1}. {todo}</p>
                                <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <h1>No todos found.</h1>
                )}
            </div>
        </div>
    )
}

export default Todo;
