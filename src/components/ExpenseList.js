import React from 'react'
import ExpenseItem from './ExpenseItem'
import { useContext } from 'react'
import { AppContext } from '../appContext'
const ExpenseList = () => {
   
  const {expenses} = useContext(AppContext)
  return (
    	<ul className='list-group'>
    {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
    ))}
</ul>
  )
}

export default ExpenseList;
