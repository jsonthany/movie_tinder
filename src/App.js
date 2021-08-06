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

  let FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7&language=en-US`;
  let SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7&api_key=API_KEY&query=`;

  useEffect (() => {
    getMovie(FEATURED_API);
  }, []);

  const getMovie = (API) => {
    fetch(API + '&page=' + pageNumber)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setMoviesRaw(data);
        maxPage=data.total_pages;
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

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Search searchfn={ onSubmitHandler }
              movies={ movies }
              changePageNumber={ changePageNumber }
              pageNumber={pageNumber}
              moviesRaw={moviesRaw} />
      {/* <Tinder movies={ movies }/> */}
    </>
  );
}

export default App;
