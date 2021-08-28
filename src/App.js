import { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import Search from './components/Search/Search';
import Tinder from './components/Tinder/Tinder';
import Youtube from 'react-youtube';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

function App() {

  const [movies, setMovies] = useState([]);
  const [moviesRaw, setMoviesRaw] = useState([]);
  const [search, setSearch] = useState('');
  const [youtube, setYoutube] = useState('');
  const [randomItemNumber, setRandomItemNumber] = useState(0);
  const [maxPages, setMaxPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  
  // let randomItemNumber = 0;
  // let pageNumber = 1;

  const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&api_key=API_KEY&query=`;

  useEffect (() => {
    console.log(pageNumber);
    console.log(API_KEY);
    getMovie(FEATURED_API);
  }, []);

  // get the Movie
  const getMovie = (API) => {
    try {
      fetch(API + '&page=' + pageNumber)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setMoviesRaw(data);
        setMaxPages(data.total_pages * 10);
        getYouTube(data.results[randomItemNumber].id)
        console.log(data);
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  const getYouTube = (id) => {
    try {
      fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          try {
            setYoutube(data.results[0].key);
          } catch (err) {
            console.log(err.message);
          }
          console.log(id);
          console.log(data);
        });
    } catch (err) {
      console.log(err.message);
    }
    
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
    // randomItemNumber = generateRandomNumber(movies.length, 0);
    setRandomItemNumber(generateRandomNumber(movies.length, 0));
    // pageNumber = generateRandomNumber(moviesRaw.total_pages, 1);
    setPageNumber(generateRandomNumber(moviesRaw.total_pages, 1));
    console.log(moviesRaw);
    console.log("item number: " + randomItemNumber);
    console.log("page number: " + pageNumber);
    getMovie(FEATURED_API);
    
  }

  // returns an integer between 1 and max
  const generateRandomNumber = (max, indexBase) => {
    return Math.floor(Math.random() * max) + indexBase;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' render={
          props => (<Search searchfn={ onSubmitHandler }
                            movies={ movies }
                            changePageNumber={ changePageNumber }
                            pageNumber={pageNumber}
                            moviesRaw={moviesRaw}
                            maxPages={ maxPages } />
        )} />
        <Route exact path='/movie_tinder' render={
          props => (<Tinder movies={ movies }
                            generateRandomMovie={ generateRandomMovie }
                            randomItemNumber={ randomItemNumber } />
                    
        )} />
        {/* <Search searchfn={ onSubmitHandler }
                movies={ movies }
                changePageNumber={ changePageNumber }
                pageNumber={pageNumber}
                moviesRaw={moviesRaw}
                maxPages={ maxPages } /> */}
        {/* <Tinder movies={ movies }
                generateRandomMovie={ generateRandomMovie }
                randomItemNumber={ randomItemNumber } /> */}
        <Youtube videoId={youtube} />
      </Switch>
    </Router>
  );
}

export default App;
