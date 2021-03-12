import React, {useState} from 'react' //We import the useState Hook from React.
// It lets us keep local state in a function component.

function TodoForm(props) { //this function(component) returns a form for the user to fill their to-do's
    const [input, setInput]= useState(''); //declaring a state variable 
    //The first item (input) is the current value, and the second (setInput) is a function that lets us update it with usestate
    const handleChange = e => {
        setInput(e.target.value);  //setting input to whatever we type in ie allows the userto actually type in values
    };

    const handleSubmit = e => {
        e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, 
        //in this case Clicking on the "Submit" button, prevents it from being submitted

         props.onSubmit({ //allows us access (pass) data between react components
            id: Math.floor(Math.random()*10000), //id generator, this permits each todo to  have a unique id to be stored more efficiently
            text: input  // whatever we end up typing in
        });

        setInput('');
    
    };
    return (
        <div> 
            {/* //handleSubmit is then called in the form on submission to prevent reloading */}
            <form className="todo=form" onSubmit={handleSubmit}> 
                <input type="text" 
                    placeholder="Add a To-do" 
                    value={input} name="text" 
                    className="todo-input"
                    onChange={handleChange} //once the input changes(onChange) then the handleChange function is called to take note of this change
                />
                
                <button className="todo-button">Add To-do</button>
            </form>
        </div>
    )
}

export default TodoForm
