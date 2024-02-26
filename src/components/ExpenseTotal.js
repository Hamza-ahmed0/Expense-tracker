import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../appContext';
 const ExpenseTotal = () => {

  const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
  return (
    <div className='alert alert-primary p-3 d-flex align-items-center justify-content-between'>
			<span>Spent so far: £{totalExpenses}</span>
		</div>
  )
}


export default ExpenseTotal;