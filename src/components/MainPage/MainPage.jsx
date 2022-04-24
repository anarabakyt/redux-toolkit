import React,{useState} from 'react'
import Loading from '../Loading/Loading'
import Settings from '../../common/settings'
import { Link } from 'react-router-dom'
import './MainPage.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const MainPage = ({title,data,loading}) => {
    const [pageNow,setPageNow] = useState(1)
    const howManyElements  = 6
    const [howManyPages,setHowManyPages] = useState(0)


const start=pageNow*howManyElements-howManyElements;
const end=start+howManyElements;
    const handleChange = (event, value) => {
      setPageNow(value);
      console.log(value)
     /*  const numberOfPage=6;
    const start=page*numberOfPage
    const end=start+numberOfPage
    let slicePage=currentPage.slice(start,end) */
   
    };
    console.log(data)
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
    <div className='container-movies'>
        {
            loading ? (<Loading/>):
            (<div className='movies'>
                <h3 style={{color:'#81de08',fontSize:'24px',margin:'5px'}}>{title}</h3>
                <div className='movie'>
                    {
                        data.slice(start,end).map((item)=>(
                            <Link className='container-item' to={`/details/${item.media_type}-${item.id}`} key={item.id}>
                                <img src={lastImage(item)} alt={item.title? item.title : item.name} />

                                <span>{item.title?item.title : item.name}</span>
                            </Link>
                        ))
                    }
                </div>
             <div style={{display:'flex',justifyContent:'center'}}>
             <Stack spacing={2} color='secondary'>
     
      
     <Pagination  count={Math.ceil(data.length/6)} color="secondary" /* page={page} */ onChange={handleChange} />
     
   </Stack>
             </div>
            
            </div>)
        }


    </div>
  )
}

export default MainPage