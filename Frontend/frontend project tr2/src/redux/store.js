import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counterSlice'
import { count } from "console";


const store = configureStore({
    reducer:{
        count:counterReducer
    }
})

console.log(store);

export default store