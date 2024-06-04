import { TransactionContext } from '@/app/context/context';
import React, { useContext }  from 'react'

export const Lists = () => {
    const {transactionsArray} =useContext(TransactionContext);
    return (
        <div className='my-2 m-5'>
            <div className='card mx-auto p-2 my-3' style={{ width: "350px", height: "200px", overflowY: "scroll" }}>
                {
                    transactionsArray.map((ele,i)=>{
                        return(
                            <div className="my-1 p-1" style={{backgroundColor:`${ele.type==="credit"?"#90EE90":"#FF474C"}`}}>
                                <p className='p-2'>{ele.title} {ele.amount}</p>
                                {/* <button className='btn btn-outline-danger' onClick={()=>{
                                    dispatch({
                                        type:"DELETE_TRANSACTION",
                                        payload:i
                                    })

                                   
                                }} >Remove</button> */}

                            </div>
                        )
                    }) 
                }
                
     
           


            </div>
        </div>
    )
}

