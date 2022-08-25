import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';



export function TransactionHistory() {

    const { transactions } = useContext(GlobalContext);


    return (<>  
      <div><h3>History</h3></div>

        <ul className='list' >

            {transactions.map(transaction=>(
                <Transaction 
                key = {transaction.id}
                transaction = {transaction} 
                />
            ))};



            {/* <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>Book</span>
                    <span>+700</span>
                </li>
                <li>
                    <span>Mobile</span>
                    <span>+900</span>
                </li> */}
        </ul>

    </>
    )
}
