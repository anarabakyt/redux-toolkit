import {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MoviesDetail from './components/MoviesDetails/MoviesDetail';
import NoFoundPage from './components/NoFoundPage/NoFoundPage';
import SearchList from './components/SearchList/SearchList';

class App extends Component{

  render(){


    return(
      <div className='App'>
        <BrowserRouter>
        <Header/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="details">
              <Route path=":id" element={<MoviesDetail />} />
            </Route>
            <Route path="search/:searchText" element={<SearchList />} />
            <Route path="*" element={<NoFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
