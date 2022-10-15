import { useQuery } from "react-query";
import apis from "../../services/apiServices";


export const GetProductQuery = () => {
    const {
        data,
        isFetched,
        isLoading,
        isSuccess } = useQuery(
            ['get-product',],
            () => apis.product.getProduct()
        )


    let productData = data?.data


   





    return {
        productData,
        isFetched,
        isLoading,
        isSuccess

    }


}