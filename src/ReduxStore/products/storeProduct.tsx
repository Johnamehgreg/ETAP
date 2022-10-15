import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    data:[],
  }

  export const productSlice = createSlice({
      name:'productList',
      initialState,

      reducers:{
        storeProduct: (state, action) => {
          
              const { payload }  = action
              state.data = payload;

          }
      }
  })

  export const  { storeProduct }  = productSlice.actions

  export default productSlice.reducer