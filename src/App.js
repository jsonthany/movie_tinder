import Navbar from './components/NavBar/Navbar'
import Search from './components/Search/Search'
import Tinder from './components/Tinder/Tinder'

import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [moviesRaw, setMoviesRaw] = useState([]);
  const [search, setSearch] = useState('');
  let pageNumber = 1;
  let maxPage = 0;

  const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7&language=en-US`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7&api_key=API_KEY&query=`;

  useEffect (() => {
    getMovie(FEATURED_API);
  }, []);

  // get the Movie
  const getMovie = (API) => {
    fetch(API + '&page=' + pageNumber)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setMoviesRaw(data);
        console.log(data);
      });
  }

  // Search for movies in the database
  const onSubmitHandler = (search) => {
    if (search) {
      pageNumber = 1;
      setSearch(search);
      getMovie(SEARCH_API + search);
    } else {
      pageNumber = 1;
      setSearch('');
      getMovie(FEATURED_API);
    }
  }

  const changePageNumber = (page) => {
    pageNumber = page;
    
    if (search) {
      getMovie(SEARCH_API + search);
    } else {
      getMovie(FEATURED_API);
    }
  }

  const generateRandomMovie = () => {
    pageNumber = generateRandomNumber(moviesRaw.total_pages);
    getMovie(FEATURED_API);
    return movies[generateRandomNumber(movies.length)];
  }

  // returns an integer between 1 and max
  const generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max) + 1;
  }

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <Search searchfn={ onSubmitHandler }
              movies={ movies }
              changePageNumber={ changePageNumber }
              pageNumber={pageNumber}
              moviesRaw={moviesRaw} /> */}
      <Tinder movies={ movies }
              generateRandomMovie={ generateRandomMovie }  />
    </>
  );
}

export default App;
