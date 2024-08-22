import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim()) {
            addTodo(todo);
            setTodo('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Ajouter une tâche"
            />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;
