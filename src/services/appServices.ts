import store from '../ReduxStore/store'
import {storeProduct} from '../ReduxStore'


export const onLike = (id:number) => {
    let list = store.getState()?.productList.data
    





    let newList = list.map((item:any) => {
        if(item.id === id){
            let update ={
                ...item, is_Like: !item.is_Like
            }
            return update
        }
        return item
    })

    store.dispatch(storeProduct(newList))
     

}