import React from 'react';
// import './styless.css';
import {Header} from './Header';
import {Balance} from './Balance'
import {BalanceSummary} from './BalanceSummary';
import {TransactionHistory} from './TransactionHistory';
import { AddTransaction } from './AddTransaction';



export default function Apps() {
  return (<>
  
  <div className='main_App'>
    <Header/>
    <Balance/>
    <BalanceSummary/>
    <TransactionHistory/>
    <AddTransaction/>
    </div>
   


    </> )
}
