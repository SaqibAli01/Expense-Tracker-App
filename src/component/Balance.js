import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export  function Balance() {
  const { transactions } = useContext(GlobalContext);
  
  const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
  const balances = transactionAmounts.reduce((acc,AmountPlus)=>(acc += AmountPlus), 0).toFixed(2);

  return (
    <div className='YourBalance'>
    <h2>Your Balance</h2>
    <h3>${balances}</h3>

    </div>
  )
}
