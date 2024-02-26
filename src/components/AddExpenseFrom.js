import React from 'react'
import { useState , useContext} from 'react';
import { AppContext } from '../appContext';
import {v4 as uuidv4} from 'uuid';
const AddExpenseFrom = () => {

    const {dispatch} = useContext(AppContext)

    const [name, SetName] = useState('');
    const [cost, SetCost] = useState('');

    const Submit= (event)=>{
        event.preventDefault();
      
        const expense ={
            id : uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
    
        dispatch({
           type: 'ADD_EXPENSE',
           payload: expense,
        });
        

        SetName('');
        SetCost('');

        

    }

   
    
  return (
    <form onSubmit={Submit}>

        <div className='row'>
            <div className='col-sm'>
                <label>Name</label>
                <input
                required='required'
                type='text'
                className='form-control'
                id='name'
                value={name}
                onChange={(event)=> SetName(event.target.value)}
                
                
                />
            </div>
            <div className='col-sm'>
                <label>Cost</label>
                <input
                required='required'
                type='text'
                className='form-control'
                id='cost'          
                value={cost}
                onChange={(event) => SetCost(event.target.value)}      
                />
            </div>

        </div>
        <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
    </form>
  )
}


export default AddExpenseFrom;