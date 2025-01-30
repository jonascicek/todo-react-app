import React from "react";
import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos } = useTodoStore();
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    );
};

export default TodoList;

// In the above code, we have created a TodoList component to display the list of todo items.
