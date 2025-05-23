import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    _id : "",
    name : "",
    email : "",
    avtar : "",
    mobile : "",
    verify_email : "",
    last_login_date : "",
    status : "",
     role : "",
     order_history : [],
     shopping_cart : []
}

const userSlice = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : {
        setUserDetails : ( state,action) =>{
            state._id = action.payload?._id
          state.name = action.payload?.name
          state.email = action.payload?.email
          state.avtar = action.payload?.avtar
          state.mobile = action.payload?.mobile
          state.verify_email = action.payload?.verify_email
          state.last_login_date = action.payload?.last_login_date
          state.status = action.payload?.status
          state.role = action.payload?.role
          state.order_history = action.payload?.order_history
          state.shopping_cart = action.payload?.shopping_cart

        },
        updateAvtar : (state,action)=>{
            state.avtar = action.payload?.avtar
        }        ,
        logout : (state,action) =>{
            state._id = ""
            state.name = ""
            state.email = ""
            state.mobile = ""
            state.verify_email = ""
            state.last_login_date = ""
            state.status = ""
            state.role = ""
            state.order_history = []
            state.shopping_cart = []
        }
    }
})

export const {setUserDetails,logout,updateAvtar} = userSlice.actions
export default userSlice.reducer