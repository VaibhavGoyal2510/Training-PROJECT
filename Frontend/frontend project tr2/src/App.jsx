import React from 'react'
import {Toaster} from 'sonner'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './redux/counterSlice'
import Login from './pages/Login'
export default function App ()  {
  // console.log(useSelector)/
  // to get the value 
  const dispatch = useDispatch()
  const {count} = useSelector((state)=>
    // console.log(state.count.count)
    state.count
  )
  const handleIncrement=()=>{
    dispatch(increment())
  }
  const handleDecrement=()=>{
    dispatch(decrement())
  }
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <Routes>
      <Route path='/register' element ={<Signup/>}/>
      <Route path='/login' element ={<Login/>}/>

    </Routes>
    
    <Toaster position='bottom-right'/>
    </div>
  )
}

// export default App