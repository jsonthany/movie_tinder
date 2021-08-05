import Navbar from './components/NavBar/Navbar'
import Search from './components/Search/Search'
import Tinder from './components/Tinder/Tinder'

import { useState, useEffect } from 'react';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7&language=en-US&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7&query=";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect (() => {
    getMovie(FEATURED_API);
  }, []);

  const getMovie = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  // Search for movies in the database
  const onSubmitHandler = async (search) => {
    if (search) {
      getMovie(SEARCH_API + search);
    } else {
      getMovie(FEATURED_API);
    }
  }

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <Search searchfn={ onSubmitHandler }
              movies={ movies } /> */}
      <Tinder movies={ movies }/>
    </>
  );
}

export default App;
