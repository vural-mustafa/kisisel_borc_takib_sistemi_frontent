import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'

//redux store olusturmaya calisiyor
const store = configureStore({
    reducer:{
        user:userReducer,
    },
});

//Tiplerin store uzerindeki durum ve dispatch kontrolu 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//redux storenin disari aktarimi saglandi.
export default store;