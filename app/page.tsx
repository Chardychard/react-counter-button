"use client";
import React, { useState } from "react";
import MyButton from "./components/button";
import Countertable from "./components/countertable";
 
export default function home() {
    
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div >
      <Countertable />
      <h1 className="flex min-h-screen flex-col items-center p-24 gap-4">React Counter Button 
        <MyButton count={count} onClick={handleClick} /></h1>
           
    </div>
    
  );
  
}




 


 