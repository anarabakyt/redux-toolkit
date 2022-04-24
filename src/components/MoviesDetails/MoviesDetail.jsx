import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import './MoviesDetail.scss'
import {fetchMoviesDetails} from '../../features/details/detailsSlice'
import {} from 'react-icons/ai'
import Loading from '../Loading/Loading'
import Header from '../Header/Header'

const MoviesDetail = () => {
    let {id}=useParams()
    const dispatch=useDispatch()
    const {details,loadig}=useSelector((state)=>state.details)
    const type=id.split('-')[0]
    useEffect(()=>{
        dispatch(fetchMoviesDetails(id));
    },[dispatch,id]);
  return (
    <div>
        <Header/>
    </div>
  )
}

export default MoviesDetail