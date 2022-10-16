import productSlice from "./products/storeProduct"
import userSlice from "./users/storeUsers"


const rootReducer: object = {
   productList : productSlice,
   userList : userSlice
}


export default rootReducer