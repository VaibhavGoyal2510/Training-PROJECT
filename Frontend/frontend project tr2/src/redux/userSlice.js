//  Signup 

import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { stat } from 'fs';
 import { toast } from 'sonner';    

// const { error } = require("console");
export const Signup = createAsyncThunk('/user/signup',async(data,{rejectWithValue})=>{
    console.log(data)
    console.log('thunk is running')
    try {
        const res = await axios.post('http://localhost:3000/api/register',data)
        console.log(res.data)
        return res.data
    } catch (error) {
        rejectWithValue(error)
    }
   
})

export const userLogin = createAsyncThunk('/user/login',async(data,{rejectWithValue})=>{
    console.log('thunk is running')
    try {
        const res = await axios.post('http://localhost:3000/api/login',data)
        console.log(res.data)
        return res.data
    } catch (error) {
        rejectWithValue(error)
    }
   
})

const initialState = {
    loading : false ,
    error:null,
    token: null,
    name: null,
    role: null
  
}

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(Signup.pending,(state)=>{
            state.loading=true;
            state.error = null
        }).addCase(Signup.fulfilled,(state)=>{
            state.loading=false;
            state.error = null
            toast.success('user successfully registered')
        }).addCase(Signup.rejected,(state,action)=>{
            state.loading = false ;
            state.error = action.payload
        }).addCase(userLogin.pending,(state)=>{
            state.loading=true

        }).addCase(userLogin.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.loading=false
        }).addCase(userLogin.rejected,(state,action)=>{
            console.log(action.payload)
            state.loading=false
        })
    }
})




// export default userSlice.reducer


export default userSlice.reducer;


// async thunk => we can use this middleware to implement all the asynchronus logic in redux