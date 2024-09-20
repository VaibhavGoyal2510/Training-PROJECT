import React from 'react'
import {Toaster} from 'sonner'
import Signup from './pages/Signup'
import { Routes,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
  // console.log(useSelector)/
  // to get the value 
  const {count} = useSelector((state)=>{
    console.log(state)
    state.count
  })
  return (
    <div>
      <pre>

      </pre>
      <button>Increment</button>
      <button>Decrement</button>
    <Routes>
      <Route path='/register' element ={<Signup/>}/>
    </Routes>
    <Toaster position='bottom-right'/>
    </div>
  )
}

export default App