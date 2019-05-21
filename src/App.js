import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import ProjectMenu from './components/ProjectMenu/ProjectMenu.js';
import ToDo from './components/ToDoList/ToDoList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
