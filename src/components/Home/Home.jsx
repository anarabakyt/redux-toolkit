import React from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import {fetchMovies, fetchPersons, fetchTvShows,} from "../../features/Movie/moviesSlice";
import Loading from "../Loading/Loading";
import MainPage from "../MainPage/MainPage";


const Home = () => {
  const dispatch = useDispatch();
  const {movies, tvShows, persons, moviesLoading, tvShowsLoading, personsLoading,} = useSelector((state) => state.movies);

  React.useEffect(() => {
    dispatch(fetchPersons());
    dispatch(fetchMovies());
    dispatch(fetchTvShows());
  }, [dispatch]);

  return (
    <div className="home">
      <div className="home-container">
        <MainPage
          title="Trending movies this week"
          data={movies}
          loading={moviesLoading}
        />
        <MainPage
          title="Trending tv shows this week"
          data={tvShows}
          loading={tvShowsLoading}
        />
        <MainPage
          title="Trending persons this week"
          data={persons}
          loading={personsLoading}
        />
      </div>
      {moviesLoading && tvShowsLoading && personsLoading && <Loading />}
    </div>
  );
};

export default Home;