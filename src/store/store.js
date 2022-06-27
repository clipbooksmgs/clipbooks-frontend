import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
import storage from 'redux-persist/lib/storage'


import productReducer from "./ProductSlice";
import clientReducer from './ClientSlice';
import subscriptionReducer from './SubscriptionSlice';
import loggedInUserReducer from "./LoggedInUserSlice";


const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    'product': productReducer,
    'client': clientReducer,
    'subscription': subscriptionReducer,
    'loggedInUser': loggedInUserReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

const persistor = persistStore(store);

export default store;
export {persistor}