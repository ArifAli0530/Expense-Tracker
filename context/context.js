import axios from "axios";

import { createContext ,useReducer} from "react";

let initialState=[]

async function getTransactions() {
  try {
    const transactionsArray = await axios.get("http://localhost:8000/transaction/getallTransactions");
    const state = transactionsArray?.data?.transactions
    return state;
    
  } catch (error) {
    console.log(error);
  }
}

async function addTransaction(body){
  try {
    const added = await axios.post("http://localhost:8000/transaction/addTransaction",body);
    return added?.data?.added ;
  } catch (error) {
    console.log(error);
  }
}

 function reducer(state,action){
  switch(action.type){
    case "GET_TRANSACTIONS":
      let transactions =action.payload
      console.log(transactions);
      return transactions;

    case "ADD_TRANSACTION":
      const newState= [action.payload,...state] ; 
      return newState;

    // case "DELETE_TRANSACTION":
    //   const updatedState= state.filter((ele,i)=>{
    //     if(action.payload !== i){
    //       return i;
    // //     }
    //   });
      localStorage.setItem("transactionDataStored",JSON.stringify(updatedState));
      return updatedState;
    default:
      return state;
  }
}
 export const TransactionContext = createContext();
 export const Provider = ({children}) => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <TransactionContext.Provider value={{transactionsArray:state,dispatch,getTransactions,addTransaction}}>
        {children}

    </TransactionContext.Provider>
    
  )
}


