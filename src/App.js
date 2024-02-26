import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseFrom from './components/AddExpenseFrom';
import { AppProvider } from './appContext';

function App() {
  return (

   <AppProvider>
    <div className='Container'>
    <h1 className='mt-3'>My Budget Planner</h1>
    <div className='row mt-3'>
       <div className='col-sm'>
          <Budget/>
       </div>
       <div className='col-sm'>
          <Remaining/>
       </div>
       <div className='col-sm'>
          <ExpenseTotal/>
       </div>
    </div>
    <h3 className='mt-3'>Expenses</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<ExpenseList />
				</div>
			</div>
    <h3 className='mt-3'>Add Expenses</h3>
			<div className='row mt-3'>
				<div className='col-sm'>
					<AddExpenseFrom/>
				</div>
			</div>
    </div>
    </AppProvider>
  );
}

export default App;
