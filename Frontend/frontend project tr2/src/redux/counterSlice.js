//  Step - 1
import {createSlice} from '@reduxjs/toolkit'


// Step - 2  Initialize state
const initialState = {
    count:0
}


// Step - 3 

const counterSlice = createSlice({
    name:'count',
    // initialState : initialState
    // if key and value are same we can pass it directly 
    initialState,
    reducers : {
        increment : (state)=>{  // state is the object initialState
            console.log(state)
            state.count+=1    
        },
        decrement : (state)=>{
            console.log(state)
            state.count -=1
        }
    }
})

// Step - 4
// exports = > actions reducer
console.log(counterSlice)
console.log(counterSlice.actions)
export const {increment,decrement} = counterSlice.actions


export default counterSlice.reducer

// Note const [count,setCount] = useState(0)