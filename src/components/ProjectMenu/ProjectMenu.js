import React from 'react';
import './ProjectMenu.css';

class ProjectMenu extends React.Component {
  render() {
    return (
      <div className="projects-container">
        <div className="project one">
        Project One
        </div>
        <div className="project two">
        Project Two
        </div>
        <div className="project three">
        Project Three
        </div>
        <div className="project-add">
          <i className="fas fa-plus"></i>
        </div>
      </div>
    )
  }
}

export default ProjectMenu;
