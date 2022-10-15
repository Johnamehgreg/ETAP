import { useQuery } from "react-query";
import apis from "../../services/apiServices";


export const GetUser = () => {
    const {
        data,
        isFetched,
        isLoading,
        isSuccess } = useQuery(
            ['get-user',],
            () => apis.users.getUsers()
        )


    let userData = data?.data


   





    return {
        userData,
        isFetched,
        isLoading,
        isSuccess

    }


}