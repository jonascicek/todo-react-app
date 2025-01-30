import React, { useState } from "react";
import useTodoStore from "../store/todoStore";

const TodoForm = () => {
    const [text, setText] = useState('');
    const addTodo = useTodoStore(state => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Neues Todo..."
            />
            <button type="submit">Add</button>
            </form>
    );
};

export default TodoForm;

// In the above code, we have created a form to add a new todo item.