import React from 'react';

function Todo(props) {
    return (
        <div className='todo-item'>
            <input className='completed'
                onChange={() => props.editTodo(props.todo._id, { completed: !props.todo.completed })}
                type="checkbox"
                checked={props.todo.completed}/>
            <h3>{props.todo.title}</h3>
            <button className='delete-todo' onClick={() => props.deleteTodo(props.todo._id)}>X</button>
        </div>
    )
}

export default Todo;
