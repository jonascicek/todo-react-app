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
        <div className="mt-4 flex justify-between">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="mr-3 w-full border p-2"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Neues Todo..."
            />
            <button className="bg-[#0093E9] px-4 py-2 font-semibold text-white rounded hover:shadow-md" >Add</button>
            </form>
            </div>
    );
};

export default TodoForm;

// In the above code, we have created a form to add a new todo item.