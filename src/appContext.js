import { createContext, useReducer } from "react";


const AppReducer = (state, action ) => {
    switch(action.type){
        case 'ADD_EXPENSE' :
            return{
                ...state,
                expenses: [...state.expenses, action.payload],
            };

         case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};

            case 'SET_BUDGET':
                return{
                    ...state,
                    budget: action.payload,
                };

        default:
            return state;
    }
}






const initialstate = {
    budget : 2000,
    expenses :[
        {id:1, name:"Car", cost:300},
    ],
};


export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialstate);

    return(
        <AppContext.Provider
        value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>

            {props.children}

        </AppContext.Provider>
    );
}