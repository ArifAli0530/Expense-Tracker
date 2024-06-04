import { TransactionContext } from '@/app/context/context';
import React, { useContext, useEffect }  from 'react'

export const Head = () => {
    const {transactionsArray} =useContext(TransactionContext);
  return (
    <div className='my-2 m-5 '>
        <h1 className='text-center'>Expense Tracker</h1>
    <div className='card mx-auto p-3 shadow my-3 ' style={{width:"350px"}}>
      <div className='text-center'>
        <h4>Balance</h4>
        <p className='lead'>₹{
            transactionsArray.reduce((y,ele)=>{
                if(ele.type==="credit"){
                    return y+=parseInt(ele.amount);
                }else{
                    return y-=parseInt(ele.amount);
                }
            },0)

}</p>
        <div style={{height:"1px",backgroundColor:"red"}}></div>
        <br/>
        <div className='d-flex justify-content-around'>
            <div>
                <p className='lead'>Income</p>
                <p className='lead'>₹{
            transactionsArray.reduce((y,ele)=>{
                if(ele.type==="credit"){
                    return y+=parseInt(ele.amount);
                }else{
                    return y ;
                }
            },0)

}</p>

            </div>
            <div style={{ width: "1px", backgroundColor: "red" }}></div>
            <div>
            <p className='lead'>Expenses</p>
                <p className='lead'>₹{Math.abs( transactionsArray.reduce((y,ele)=>{
                if(ele.type==="debit"){
                    return y-=parseInt(ele.amount);
                }else{
                    return y;
                }
            },0))
           

}</p>
            </div>

        </div>


      </div>
    </div>
    </div>
  )
}


