import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div className={`alert alert-${props.alert.type} alert-dismissible fade shadow`} role="alert">
        <strong>{capitalize(props.alert.msg)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
