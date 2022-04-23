import {configureStore} from '@reduxjs/toolkit'
import hotelSlice from './Hotel/hotelSlice';
export const store=configureStore({
    reducer:{
     hotels:hotelSlice,

    },
});