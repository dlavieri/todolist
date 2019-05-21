import React from 'react';

function Checkbox (props) {
  return (
    <div className={props.complete ? "checkedbox" : "checkbox"}
    onClick={props.complete ? null : props.onClick}
    order={props.order}>
      {props.complete ?
        <i className="fas fa-check"
        order={props.order}
        onClick={props.onClick}></i> : null}
    </div>
  )
}

export default Checkbox;
