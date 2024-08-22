import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
    return (
        <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            <span>{todo.text}</span>
            <button onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? 'Incomplet' : 'Complet'}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Supprimer</button>
        </div>
    );
}

export default TodoItem;
