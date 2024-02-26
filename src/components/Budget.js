import React , {useContext, useState}from 'react'
import { AppContext } from '../appContext';
import Editbudget from './editbudget';
import Viewbudget from './viewbudget';


 const Budget = () => {

   const {budget, dispatch} = useContext(AppContext)
   const [isEditing, SetIsEditing] = useState(false);


   const handleEditClick= () =>{
       SetIsEditing(true);
   }

   const handleSaveClick = (value)=>{
       dispatch({
          type:'SET_BUDGET',
          payload: value
       });

       SetIsEditing(false);
   }


  return (
    <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
    {isEditing ? (
      <Editbudget handleSaveClick={handleSaveClick} budget={budget} />
    ) : (
      // For part 1 render component inline rather than create a seperate one
      <Viewbudget handleEditClick={handleEditClick} budget={budget} />
    )}
  </div>
  )
}


export default Budget;