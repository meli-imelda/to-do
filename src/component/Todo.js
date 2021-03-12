import React, {useState} from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri'

function Todo() {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return todos.map((todo, index)=>(
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'} key={index}>
            {/* //in this div we are passing in the todo text */}
            <div key= {todo.id} onClick{ () => completeTodo(todo.id)} >
                {todo.text}
            </div>
            {/* this div enables us add react icons to our todo form */}
            <div className="icons">
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>

    ))
}

export default Todo
