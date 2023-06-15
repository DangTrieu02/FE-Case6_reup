import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk("users/login",async(data)=>{
    const res = await customAxios.post("users/login",data)
    return res.data
})
export const loginWithGoogle = createAsyncThunk("users/loginWithGoogle",async(data)=>{
    const res = await customAxios.post("/users/login-google",data)
    return res.data
})

