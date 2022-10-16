
import { server, BASE_URL } from "../libs/axios-util";

export default {
    auth:{

    },

    product:{
        getProduct: () => {
            return server.get(`${BASE_URL}/products?limit=100`)
        },

        getProductById: (id:number) => {
            return server.get(`${BASE_URL}/products/${id}`)
        }
    },
    users:{
        getUsers: () => {
            return server.get(`${BASE_URL}/users`)
        },

        getUserById: (id:number) => {
            return server.get(`${BASE_URL}/users/${id}`)
        }
    }

}