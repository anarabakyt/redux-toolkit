import React,{useState} from 'react'
import Loading from '../Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import './MainPage.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import defaultImage from '../../images/default-image.jpg'




const MainPage = ({title,data,loading}) => {
   
    const navigate = useNavigate();
    const [pageNow,setPageNow] = useState(1)
    const howManyElements  = 6
    

//pagination
const start=pageNow*howManyElements-howManyElements;
const end=start+howManyElements;
    const handleChange = (event, value) => {
      setPageNow(value);
      console.log(value)
     //i tried to show number of page on localhost,but could not.
      navigate({
        pathname: '/',
        page: `?page=${value}`
      });
  
      
   
   
    };
    console.log(data)
    //this function find images
    const lastImage=(item)=>{
        let baseURL='https://image.tmdb.org/t/p/w500/';
        if(item.poster_path){
            return (baseURL+=item.poster_path);
        }else if(item.profile_path){
            return (baseURL+=item.profile_path)
        }
        return defaultImage
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