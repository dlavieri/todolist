import React from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem.js';
import ProgressBar from '../ProgressBar/Progress.js';
import ProjectName from './ProjectName.js';


class ToDo extends React.Component {
  state = {
    taskList: [],
    newTask: '',
    percentage: 0,
    projectName: '',
    projNameEdit: true,
  }

  updateProgress =()=> {
    let tasks = this.state.taskList;
    let tasksComplete = 0;
    for(let j=0; j< tasks.length; j++) {
      if(tasks[j].complete === true) {
        tasksComplete += 1;
      }
    }
    let progress = (tasksComplete / tasks.length) * 100;
    this.setState({
      percentage: progress,
    });
  }

  handleNameChange =(e)=> {
    let newName = e.target.value;
    this.setState(prevState => ({
      projectName: newName,
      projNameEdit: !prevState.projNameEdit,
    }));
  }

  handleNameChangeEdit =()=> {
    this.setState({
      projNameEdit: true,
    });
  }

  handleClick =(e)=> {
    let i = e.target.getAttribute('order');
    let newTaskList = this.state.taskList;
    console.log(i);
    if(i){
      newTaskList[i].complete = !newTaskList[i].complete;
      this.setState({
        taskList: newTaskList,
      });
      this.updateProgress();
      console.log(this.state.percentage);
    };
  }

  handleKeyPress =(e)=> {
    if(e.key === 'Enter') {
      this.handleAdd(e);
    };
  }

  handleInput =(e)=> {
    const newTask = e.target.value;
    this.setState({
      newTask: newTask,
    })
  }

  handleAdd =(e)=> {
      let taskCount = this.state.taskList.length;
      let updatedTasks = this.state.taskList.concat({
        task: this.state.newTask,
        order: taskCount,
        complete: false,
      });
    this.setState({
      taskList: updatedTasks,
      newTask: '',
    });
    document.getElementById('new-task-input').value = '';
    this.updateProgress();
  }

  render () {
    return (
    <div className="page-container">
      <div className="to-do-container">
        { this.state.projNameEdit ? <input
          className="new-project-input"
          placeholder="Name your project"
          value={this.state.projectName ? this.state.projectName : null}
          onBlur={this.handleNameChange} /> :
        <ProjectName projectName={this.state.projectName} onClick={this.handleNameChangeEdit}/>}
        <ProgressBar percentage={this.state.percentage} />
        <div className="to-do-list">
          {this.state.taskList.map(i =>
            <ToDoItem
              order={i.order}
              task={i.task}
              complete={i.complete}
              onClick={this.handleClick} />) }
          <div className="to-do-item add-to-do">
            <div className="new-task-submit-button"
                onClick={this.state.newTask ? this.handleAdd : null}>
              <i className={this.state.newTask ? "fas fa-plus valid" : "fas fa-plus"}></i>
            </div>
            <input className="new-task-input"
                  placeholder="Add a new task..."
                  onChange={this.handleInput}
                  onKeyPress={this.state.newTask ? this.handleKeyPress : null}
                  id="new-task-input"/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ToDo;
