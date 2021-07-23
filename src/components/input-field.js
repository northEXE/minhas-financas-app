import React from 'react'

export default (props) => {
    return(
        <div className="input-field col s12">
            <label htmlFor={props.labelFor}>{props.label}</label>
            {props.children}
        </div>
    );
}