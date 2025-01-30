import { create } from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({ 
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    }))
}));

export default useTodoStore;

//In the above code, we have created a store using the create function from zustand. 
//We have defined three actions addTodo, toggleTodo, and removeTodo to add, toggle, and remove a todo item respectively. 
//We have also defined a todos state to store the todo items.