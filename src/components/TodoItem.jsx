import React from 'react';
import useTodoStore from '../store/todoStore';

const TodoItem = ({ todo }) => {
    const { toggleTodo, removeTodo } = useTodoStore();
    return ( 
        <li>
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}    
                </span>
            <button onClick={() => removeTodo(todo.id)}>x</button>
        </li>
    );
};

export default TodoItem;

// In the above code, we have created a TodoItem component to display a todo item.