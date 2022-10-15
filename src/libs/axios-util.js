import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const BASE_URL = 'https://fakestoreapi.com'
// export const BASE_URL = process.env.REACT_APP_TEST_BASE_API_URL


export const server = axios.create({
    baseURL:BASE_URL,
    responseType:"json"

})

const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      return value
    } catch(e) {
      // error reading value
    }
  }



server.interceptors.request.use(async (config) => {
    const token = getToken()
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    } else {
        return config;
    }
  }, error => {
   return Promise.reject(error);
  });


  server.interceptors.response.use(response => {

    return response
  }, error => {
  
    if (error.response && error.response.status === 401) {
        AsyncStorage.removeItem('token')
    }
   
    return Promise.reject(error);
  })