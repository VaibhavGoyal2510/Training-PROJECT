import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import counterReducer from './counterSlice'
// import { count } from "console";


const store = configureStore({
    reducer:{
        count:counterReducer,
        user : userReducer
    }
})

console.log(store);

export default store