import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';



const reducers = combineReducers(rootReducer)

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);





const store = configureStore({
  reducer: persistedReducer, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
     // middleware: getDefaultMiddleware(),

  devTools: true,

})
export type GetStateFunc = typeof store.getState;
export type State = ReturnType<GetStateFunc>;

export const persistor = persistStore(store);

export default store

