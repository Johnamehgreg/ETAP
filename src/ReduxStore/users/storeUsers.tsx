import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    data:[],
  }

  export const userSlice = createSlice({
      name:'userList',
      initialState,

      reducers:{
        storeUser: (state, action) => {
          
              const { payload }  = action
              state.data = payload;

          }
      }
  })

  export const  { storeUser }  = userSlice.actions

  export default userSlice.reducer