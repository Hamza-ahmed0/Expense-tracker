import React from 'react'
import {TiDelete} from 'react-icons/ti'
import { useContext } from 'react';
import { AppContext } from '../appContext';



const ExpenseItem = (props) => {

	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div id='cost_v'>
					£{props.cost}
				
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</li>
  )
}


export default ExpenseItem;