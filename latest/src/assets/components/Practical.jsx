import React, { useState } from 'react'

const Practical = () => {
    
    const[data,setdata]=useState('')
    const[currpage,setcurrpage]=useState(1)
  
    
    async const response= fetch('https://dummyjson.com/products')
    return await response.json()

    
    const currpage= 1
    prevpage= currpage
    nextpage= currpage+4 

  
   
  
  
  
  
  
  
  function ClickHandler(item){
    setcurrpage(prevpage)

  }
  
  
  
  
  
  function ClickHandler2(event){
    setcurrpage(nextpage)

  }
  
  
  
  
  
  return (
    <div>
        <h1> WEB DEV-2 PRACTICAL </h1>
        <button onClick={ClickHandler}> Previous </button>
        <button onClick={ClickHandler2}> Next </button>
    
    </div>
  )
}

export default Practical
