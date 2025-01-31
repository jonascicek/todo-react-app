import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
    return (
        <div className=" flex min-h-screen w-full flex-col justify-center bg-gray-200 bg-gradient-to-bl from-[#0093E9] to-[#80D0C7]">
            <div className="container mx-auto p-4 bg-white rounded shadow">
            <h1>Todo App</h1>
            <TodoForm />
            <TodoList />
            </div>
        </div>
    );
};

export default App;