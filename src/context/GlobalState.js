import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'


const initialState = {
  transactions: [
    { id: 1658348440603, description: 'Rent', transactionAmount: 5000 },
    { id: 1658348378985, description: 'Shopping', transactionAmount: -2000 },
    { id: 1658348337821, description: 'salary', transactionAmount: 8000 }
  ]

}

//create Globel context
export const GlobalContext = createContext(initialState);



//create a Provider for Global Context 
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Add New Transaction Action
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  // Delete Existing Transaction Action
  function deLTransaction(id){
    dispatch({
      type: 'DEL_TRANSACTION',
      payload: id,
    })
  }
//Edit Description and Amount

function editTransaction(transaction){
  dispatch({
    type: 'EDIT_TRANSACTION',
    payload: transaction,
  })
}

  return (
    <GlobalContext.Provider value={
      {
        transactions: state.transactions,
        addTransaction,
        deLTransaction,
        editTransaction,

      }
    }>{children}
    </GlobalContext.Provider>
  );
}
