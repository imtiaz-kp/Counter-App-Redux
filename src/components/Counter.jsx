import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyAmount, reset } from '../redux/counterSlice'

function Counter() {
    const [amount,setAmount]=useState("")
    const dispatch=useDispatch()
   const count=useSelector((state)=>state.counter.count)


   const handilIncriment=()=>{
    if(amount===""){
        alert("Please Provid amount")
    }else{
        //update state in store
        dispatch(incrementbyAmount(Number(amount)))
    }
   }

  return (
    <div style={{height:"70vh"}}  className='w-100 justify-content-center d-flex align-items-center  p-3 flex-column' >
        <div className='border align-items-center d-flex flex-column  rounded p-5 w-25 '>
            
        <h1 style={{fontSize:'100px'} } >{count}</h1>
         <div className='d-flex justify-content-center justify-content-between w-100 '>
            <button onClick={()=>dispatch(decrement())} className="btn btn-warning">Decrement</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
            <button  onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
         </div>
         <div className="d-flex mt-3">
            <input type="text" className="form-control" placeholder='Enter amt to be incremented' onChange={e=>setAmount(e.target.value)}/>
            <button onClick={handilIncriment}   className="btn btn-primary ms-3">Increment</button>

         </div>
        </div>
    </div> 
  )
}
 
export default Counter