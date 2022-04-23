import React from 'react'
import Loading from '../Loading/Loading'
import Settings from '../../common/settings'
import { Link } from 'react-router-dom'


const MainPage = ({title,data,loading}) => {
    const lastImage=(img)=>{
        let baseURL='https://image.tmdb.org/t/p/w500/';
        if(img.poster_path){
            return (baseURL+=img.poster_path);
        }else if(img.profile_path){
            return (baseURL+=img.profile_path)
        }
        return ''
    }
  return (
    <div>
        {
            loading ? (<Loading/>):
            (<div className='movies'>
                <h3>{title}</h3>
                <div>
                    {
                        data.map((item)=>(
                            <Link className='container-item' to={`/details/${item.media_type}-${item.id}`} key={item.id}>
                                <img src={lastImage(item)} alt={item.title? item.title : item.name} />

                                <span>{item.title?item.title : item.name}</span>
                            </Link>
                        ))
                    }
                </div>

            
            </div>)
        }


    </div>
  )
}

export default MainPage