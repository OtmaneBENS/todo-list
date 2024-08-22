import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = {
            id: Math.random().toString(36).substr(2, 9),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Ma ToDo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
