import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Transaction({ transaction }) {

  const { deLTransaction, editTransaction } = useContext(GlobalContext);
 

//color change k lia
  const sign = transaction.transactionAmount > 0 ? '+' : '-';
  const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

  return (
    <>
      {

        <li>
          <span className='incomes'>{transaction.description}</span>
          <span className='amt'>{transaction.transactionAmount}</span>

          <button className='delete-btn' onClick={() => { deLTransaction(transaction.id) }}>
            X
          </button>


          <button className='edit-btn'
            onClick={() => {
              editTransaction(transaction.id)
              var newdesc = prompt("Description", transaction.description);
              var newamount = +prompt("Transaction Amount", +transaction.transactionAmount);
              transaction.description = newdesc;
              transaction.transactionAmount = newamount

            }}
          >
            Edit
          </button>

        </li>

      }
    </>
  )
}
