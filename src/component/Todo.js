import React, {useState} from 'react';
import TodoForm from './TodoForm';
// import TodoList from './TodoList';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';


function Todo (todos, completeTodo, removeTodo, updateTodo) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    console.log('todos is an object:', todos)
    //todos is the object passed from TodoList and contains
    // todos.todos which is our array
    // and all the functions passed e.g todos.removeTodo() is the function
    console.log('todos.todos:', todos.todos)
    console.log('todos.todos length:', todos.todos.length)

    const submitUpdate = value => {
        todos.updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit ={edit} onSubmit = {submitUpdate} />;
    }

    // todos is an object
    // todas.todos is the actual array
    // This fixed the todos.map() is not a function as map
    // is defined only for arrays

    return todos.todos.map((todo, index)=>(
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index} 
        >
            {/* //in this div we are passing in the todo text */}
            <div key= {todo.id} onClick= { () => todos.completeTodo(todo.id)} >
                {todo.text}
            </div>
            {/* this div enables us add react icons to our todo form */}
            <div className="icons">
                <RiCloseCircleLine  onClick={() => todos.removeTodo(todo.id)} className='delete-icon'/>
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'/>
            </div>
        </div>

    ))

    // React default functional component
    // return (
    //     <div>
    //         <h2>Hi there</h2>
    //         {
    //                 todos.todos.map((todo, index)=>(
    //                  <div 
    //                      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    //                      key={index} 
    //                  >
    //                 {/* //in this div we are passing in the todo text */}
    //                 <div key= {todo.id} onClick= { () => completeTodo(todo.id)} >
    //                     {todo.text}
    //                 </div>
    //                 {/* this div enables us add react icons to our todo form */}
    //                 <div className="icons">
    //                     <RiCloseCircleLine  onClick={() => removeTodo(todo.id)} className='delete-icon'/>
    //                     <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icon'/>
    //                 </div>
    //             </div>
    
    //         ))}
            
    //     </div>
    // )
}

export default Todo
