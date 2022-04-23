import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './Movie/moviesSlice';
import detailsReducer from "./details/detailsSlice";

export const store=configureStore({
    reducer:{
     movies:moviesReducer,
     details:detailsReducer

    },
});