// src/App.js
import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
