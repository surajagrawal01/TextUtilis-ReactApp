import React from 'react'

export default function Alert(props) {
   //To capitalize the type of laert sucess gives - green color alert 
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // to send alert with the message and type
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}     
    </div>
  )
}
