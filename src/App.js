import Navbar from './components/NavBar/Navbar'
import Search from './components/Search/Search'
import Tinder from './components/Tinder/Tinder'
import Youtube from 'react-youtube';

import { useState, useEffect } from 'react';

function App() {

  const [movies, setMovies] = useState([]);
  const [moviesRaw, setMoviesRaw] = useState([]);
  const [search, setSearch] = useState('');
  const [youtube, setYoutube] = useState('');
  const [randomItemNumber, setRandomItemNumber] = useState(0);
  const [maxPages, setMaxPages] = useState(0);
  let pageNumber = 1;

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
        setMaxPages(data.total_pages * 10);
        getYouTube(data.results[randomItemNumber].id)
        console.log(data);
      });
  }

  const getYouTube = (id) => {
    fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=a52ad5ea9ff27be0460bfc281fe3cbd7`)
        .then((res) => res.json())
        .then((data) => {
        setYoutube(data.results[0].key);
        console.log(id);
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
    pageNumber = generateRandomNumber(moviesRaw.total_pages, 1);
    getMovie(FEATURED_API);
    setRandomItemNumber(generateRandomNumber(movies.length, 0));
  }

  // returns an integer between 1 and max
  const generateRandomNumber = (max, indexBase) => {
    return Math.floor(Math.random() * max) + indexBase;
  }

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      {/* <Search searchfn={ onSubmitHandler }
              movies={ movies }
              changePageNumber={ changePageNumber }
              pageNumber={pageNumber}
              moviesRaw={moviesRaw}
              maxPages={ maxPages } /> */}
      <Tinder movies={ movies }
              generateRandomMovie={ generateRandomMovie }
              randomItemNumber={ randomItemNumber } />
      <Youtube videoId={youtube} />
    </>
  );
}

export default App;
