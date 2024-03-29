import React, {useState} from 'react'

 const Editbudget = (props) => {

    const [value, SetValue] = useState(props.budget)
  return (
    <div>

<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => SetValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
    </div>
 )
}


export default Editbudget;