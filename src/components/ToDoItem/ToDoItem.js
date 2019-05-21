import React from 'react';
import '../ToDoList/ToDoList.css';
import Checkbox from './checkbox.js';

function ToDoItem (props) {
  return (
    <div className="to-do-item" draggable="true">
      <div className="done-button">
        <Checkbox onClick={props.onClick}
        complete={props.complete} 
        order={props.order} />
      </div>
      <div className="task-desc">
      {props.task}
      </div>
    </div>
  )
}

export default ToDoItem;
