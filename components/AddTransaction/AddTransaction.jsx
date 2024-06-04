import { TransactionContext } from '@/app/context/context';
import React, {useContext,useState} from 'react'

export const AddTransaction = () => {
    const [transaction,setTransaction]=useState({title:"",amount:"",type:""});
    const {dispatch,addTransaction}=useContext(TransactionContext);
  
    async function handleSubmit(){
        const added= await addTransaction(transaction);
        try {
            dispatch({
                type:"ADD_TRANSACTION",
                payload:transaction
            })
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className='my-2 m-5' >
         <div className="card mx-auto p-3 shadow" style={{width:"350px"}}>
            <label htmlFor="title">Title</label>
            <input type="text" value={transaction.title} name='title' onChange={(e)=>{
                setTransaction(prev=>{return {...prev,title:e.target.value}})
            }} />
            <br />
            <label htmlFor="amount">Amount</label>
            <input type="text" value={transaction.amount} name='amount' onChange={(e)=>{
                setTransaction(prev=>{return {...prev,amount:e.target.value}})
            }} />
            <br />
            <label htmlFor="type">Transaction Type</label>
            <select name="type" value={transaction.type}   onChange={(e)=>{
                setTransaction(prev=>{return {...prev,type:e.target.value}})
            }}>
                <option value="" selected disabled>Select</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
            </select>
            <button className='btn btn-success mt-4 mb-1' onClick={()=>{
               
                // handleSubmit(transaction);
                setTransaction({title:"",amount:"",type:""})
            }}>Submit</button>
        </div>


      
    </div>
  )
}


