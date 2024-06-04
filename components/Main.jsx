import React, { useContext, useEffect, useState } from 'react'
import {Head} from './Head/Head'
import {AddTransaction} from './AddTransaction/AddTransaction'
import {Lists} from './Lists/Lists';
import {TransactionContext} from '../context/context';


const Main = () => {
  const {dispatch,getTransactions}=useContext(TransactionContext);
  useEffect(()=>{
    fetchTransactions()
   
  },[])

  async function fetchTransactions(){
    let transactions = await getTransactions()
    
    dispatch({
      type:"GET_TRANSACTIONS",
      payload: transactions
    })

  }

  return (
    <div className='conatiner my-2 p-3'>
      <Head/>
      <Lists/> 

      <AddTransaction/>

    </div>
  )
}

export default Main
