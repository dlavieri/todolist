import React from 'react';

function ProjectName (props) {
  return (
    <div className="project-title" onClick={props.onClick}>
      {props.projectName}
    </div>
  )
}

export default ProjectName;
