import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => { //this function allows to add a todo which will be stored on clicking the sbutton
        if(!todo.text || /^\s*$/.test(todo.text)){ 
            //this condition is to to ensure that if no one types in a letter it will not show up like in the case of tab
            return;
        }

        const newTodos = [ todo,...todos]; //enables everything to be passed on real time ie, todo is for each letter and todos for the whole string

        setTodos(newTodos) 
        console.log(...todos)
    };
    //what the removeTodo does is, it essentially does is checks the actual array for the todo and once it is found,
    // it removes it from the application
        const removeTodo = (id) => { 
            const removedArr = [...todos.todos].filter(todo => todo.id !== id)
            
            setTodos(removedArr)
        };

        const updateTodo=(todoId, newValue) =>{
            if(!newValue.text || /^\s*$/.test(newValue.text)){ 
                //this condition is to to ensure that if no one types in a letter it will not show up 
                //like in the case of tab
                return;
            }

            setTodos(prev => prev.map(item => (item.id ===todoId ? newValue : item)) );
            
        };

        const completeTodo = id => {
            let updatedTodos = todos.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete 
                }
                return todo;
            });
            setTodos(updatedTodos);
        };
    
    return (
        <div>
            <h1>What's Up Today?</h1>
             <TodoForm onSubmit = {addTodo}/>{/* //passing the todoformas an argument to be returned in the list */}
             <Todo todos = {todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default TodoList;

