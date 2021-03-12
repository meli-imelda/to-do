import React from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  return (
    <div className="todo-app">
        <TodoList/>
    </div>
  );
}

export default App;
