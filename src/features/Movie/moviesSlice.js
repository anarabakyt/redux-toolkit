import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
    params: {
      order_by: 'popularity',
      adults_number: '2',
      units: 'metric',
      room_number: '1',
      checkout_date: '2022-10-01',
      filter_by_currency: 'AED',
      locale: 'en-gb',
      checkin_date: '2022-09-30',
      latitude: '65.9667',
      longitude: '-18.5333',
      children_number: '2',
      children_ages: '5,0',
      categories_filter_ids: 'class::2,class::4,free_cancellation::1',
      page_number: '0',
      include_adjacency: 'true'
    },
    headers: {
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
      'X-RapidAPI-Key': '067b12b2eemsh5a669c5248b9c97p1d77f9jsnb910f7a0e1ec'
    }
  };
  
export const fetchHotel=createAsyncThunk('api/hotels',async(obj,{state,error})=>{
    try{
        const req =await axios.request(options)
    console.log(req.data.hotels)
    return req.data.hotels
    }catch(error){
        console.log(error)
    }
   
})

/* const initialState = {
    hotels: [],
    
  }; */
  
  const hotelSlice = createSlice({
    name: "hotels",
    initialState:[],
    reducers: { },
    extraReducers: {
      /* [fetchHotel.pending]: (state, action) => {
        state.moviesLoading = true;
      }, */
      [fetchHotel.fulfilled]: (state, action) => {
       return action.payload
      },
      [fetchHotel.rejected]: (state, action) => {
        return []
      },
  
     
    },
  });
  
  export const actions = hotelSlice.actions;
  
  export default hotelSlice.reducer;