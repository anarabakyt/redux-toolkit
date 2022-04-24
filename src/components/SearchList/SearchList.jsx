import React, { useEffect } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchSearch } from '../../features/Movie/moviesSlice'
import Loading from '../Loading/Loading'
import MainPage from '../MainPage/MainPage'

const SearchList = () => {
  const dispatch=useDispatch()
  let {searchText}=useParams()
  const {searchList,searchLoading}=useSelector((state)=>state.movies)
  console.log(searchText)

  useEffect(()=>{
   dispatch(fetchSearch(searchText))
  },[dispatch,searchText])


  return (
    <div className='search-detail'>
      {searchLoading && <Loading/>}
      {searchList.length===0 && (
        <div className='show-results-err'>
          <h1>No results found...</h1>
          <Link to='/'>
            <AiOutlineLeft size={14}/>
            Go back
          </Link>
        </div>
      )}
      {searchList.length>0 && (
        <>
          <div className='show-results'>Show results for your search...</div>
          <div className='home'>
            <div className='home-container'>
              <MainPage title='' data={searchList} loading={searchLoading}/>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SearchList