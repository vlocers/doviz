import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";





function Doviz() {

  const baseurl = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_CpY93mQgmtS8Qdog0paOQ5EJBFXpYXJ2HEhJ9CJf"


  const [money, setMoney] = useState("")
  const [first, setFirst] = useState("USD");
  const [last, setLast] = useState("TRY");
  const [amount,setAmount] = useState(0);
  

  const exchange = async ()=>{
    const result =await  axios.get(`${baseurl}&base_currency=${first}`);
    const convertedAmount = (result.data.data[last] * money).toFixed(2); 
    setAmount(convertedAmount);
    
    
    
  }


  return (
    <div className='main'>
      <div className='header'>
      <h1>DÖVİZ HESAPLAMA ARACI</h1>
      </div>
      
      <div className='main2'>
      <input value={money} onChange={(e)=>(setMoney(e.target.value))} className='money' type="number" />
      <select value={first} onChange={(e)=>(setFirst(e.target.value))} name="first">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
      </select>
      <FaArrowRight style={{fontSize:"30px"}}/>
      <select name="last" value={last} onChange={(e)=>(setLast(e.target.value))}>
        <option value="TRY">TRY</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <input className='sonuc' type="text" readOnly value={amount} />
      </div>
      <div className='btn-div'><button className='btn' onClick={exchange}>ÇEVİR</button></div>
    </div>
  )
}

export default Doviz
