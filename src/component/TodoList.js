import React, {useState} from 'react'
import TodoForm from './TodoForm';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => { //this function allows to add a todo which will be stored on clicking the sbutton
        if(!todo.text || /^\s*$/.test(todo.text)){ 
            //this condition is to to ensure that if no one types in a letter it will not show up like in the case of tab
            return
        }

        const newTodos = [ todo,...todos] //enables everything to be passed on real time ie, todo is for each letter and todos for the whole string

        setTodos(newTodos)
    }
    return (
        <div>
            <h1>What's Up Today?</h1>
             <TodoForm onSubmit = {addTodo}/>{/* //passing the todoformas an argument to be returned in the list */}
        </div>
    )
}

export default TodoList

