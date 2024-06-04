"use client"

import Main from "./components/Main";
import dynamic from "next/dynamic";
import { Provider } from "./context/context";
const NoSSR=dynamic(()=>import("./components/Main"),{ ssr:false})
export default function Home() {
  
  return (
    <div>
      <Provider>
      <NoSSR/>
      </Provider>
        
    </div>
  );
}
