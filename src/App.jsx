import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
    return (
        <div className="flex min-h-screen w-full flex-col justify-center bg-gray-200 bg-gradient-to-bl from-[#0093E9] to-[#80D0C7]">
            <div className="container mx-auto my-auto p-4 bg-white rounded shadow border border-gray-300 max-w-7xl">
            <h1 className="my-6 bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-center text-3xl font-bold text-transparent">Todo App</h1>
            <TodoForm />
            <TodoList />
            </div>
        </div>
    );
};

export default App;