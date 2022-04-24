import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import './MoviesDetail.scss'
import {moviesDetail} from '../../features/details/detailsSlice'
import { AiFillStar, AiOutlineClose, AiOutlineFieldTime } from 'react-icons/ai'
import Loading from '../Loading/Loading'
import Header from '../Header/Header'



const MoviesDetail = () => {
    let {id}=useParams()
    const dispatch=useDispatch()
    const {details,loading}=useSelector((state)=>state.details)
    const type=id.split('-')[0]
    useEffect(()=>{
        dispatch(moviesDetail(id));
    },[dispatch,id]);
  return (
    <div className='movies-detail'>
      {loading ?(<Loading/>) :(
        <div className='movies-detail__container'>
          <div className='movies-detail__container-content'>
            <h1 className='movies-detail__container-content-title'>
              {type==='movie' && details.original_title}
              {type==='tv' && details.name}
              {type==='person' && details.name}
            </h1>
            <div className='movies-detail__container-contentinfo'>
              <div className='star'>
                <AiFillStar className='icon'/>
                <span> {details.vote_average ? details.vote_average :details.popularity}</span>
              </div>
              <div className='date'>
                <AiOutlineFieldTime className='icon'/>
                <span>
                  {type==='movie' && details.release_date}
                  {type==='tv' && details.first_air_date}
                  {type==='person' && details.birthday}
                </span>
              </div>
              <div className='status'></div>
            </div>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default MoviesDetail