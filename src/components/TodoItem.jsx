import React from 'react';
import useTodoStore from '../store/todoStore';

const TodoItem = ({ todo }) => {
    const { toggleTodo, removeTodo } = useTodoStore();
    return ( 
        <li className="flex justify-between items-center mb-2">
            <span
                className="mx-4"
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}    
                </span>
            <button className="bg-[red] px-2 py-1 text-white rounded" onClick={() => removeTodo(todo.id)}>Done</button>
        </li>
    );
};

export default TodoItem;

// In the above code, we have created a TodoItem component to display a todo item. 
// It includes the text of the todo item, a button to toggle the completion status, and a button to remove the todo item. 
// The toggleTodo and removeTodo functions are provided by the useTodoStore hook, which is used to access the global state and actions defined in the todoStore.