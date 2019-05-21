import React from 'react';
import './Progress.css';

function ProgressBar (props) {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{width: `${props.percentage}%`}}>
      </div>
    </div>
  )
}

export default ProgressBar;
