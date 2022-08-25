import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';



export function BalanceSummary() {

  const { transactions } = useContext(GlobalContext);

  const transactionAmount = transactions.map(transaction => transaction.transactionAmount);

  const income = transactionAmount
    .filter((transaction) => transaction > 0)
    .reduce((acc, AmountPlus) => (acc += AmountPlus), 0)
    .toFixed(2);

  const expense = Math.abs(transactionAmount
    .filter((transaction) => transaction < 0)
    .reduce((acc, AmountPlus) => (acc += AmountPlus), 0)
  )
    .toFixed(2);





  return (
    <>
      <div className='expense-container'>

        <h3> <b className='h33'>INCOME</b> <br/> ${income}</h3>
        <h3> <b className='h33'>EXPENSE</b>  <br />${expense}</h3>

      </div>

    </>
  )
}
