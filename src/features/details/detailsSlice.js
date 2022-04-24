import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { MoviesService } from "../../common/Api";


let API_KEY='3ea269efccf77ad8d8cd4800d699fb82'
export const moviesDetail=createAsyncThunk('details/moviesDetail',async(id)=>{
    const type=id.split('-')[0]
    const lastId=id.split('-')[1]
    const res=await MoviesService.get(`${type}/${lastId}?api_key=${API_KEY}&language=en-US`);
    return res.data
});
const initialState={
    loading:false,
    details:[],
}

const detailSlice=createSlice({
    name:'details',
    initialState,
    reducers:{},
    extraReducers:{
        [moviesDetail.pending]:(state)=>{
            state.loading=true;
        },
        [moviesDetail.fulfilled]:(state,action)=>{
            state.details=action.payload;
            state.loading=false;
        },
        [moviesDetail.rejected]:(state)=>{
            state.loading=false
        },
    }
})
export default detailSlice