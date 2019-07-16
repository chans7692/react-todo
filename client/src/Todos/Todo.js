import React from 'react';

function Todo(props) {

    console.log(props.todo)
let line = {
    "textDecoration": props.todo.completed === true ? 'line-through' :''
}

console.log(line)

    return (
        <div className='todo-item'>
            <input className='completed'
                onChange={() => props.editTodo(props.todo._id, { completed: !props.todo.completed})}
                type="checkbox"
                checked={props.todo.completed}/>
            <h3 style={line}>{props.todo.title}</h3>
            <button className='delete-todo' onClick={() => props.deleteTodo(props.todo._id)}>X</button>
        </div>
    )
}

export default Todo;
