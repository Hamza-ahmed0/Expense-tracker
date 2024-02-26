import React from 'react'

const Viewbudget = (props) => {
  return (
    <div><span>Budget: £{props.budget}</span>
    <button id='edit' type='button' class='btn btn-primary' onClick={props.handleEditClick}>
        Edit
    </button></div>
  )
}


export default Viewbudget;