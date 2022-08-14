import React from 'react'
import classNames from 'classnames';

export default function TextInputGroup(props) {
  return (
    <div className="form-group">
        <label forname={props.name}>{props.label}</label>
        <input name={props.name} 
               type={props.type}
               value={props.value} 
               onChange={props.onChange}
               className={
                    classNames('form-control',{
                        'is-invalid': props.error
                    })
               }
        />
        <div className="invalid-feedback">
            {props.error}
        </div>
    </div>
  )
}
