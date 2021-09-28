import { useState, useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import Search from './components/Search/Search';
import Tinder from './components/Tinder/Tinder';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import Youtube from 'react-youtube';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// the API key used to pull in data
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

function App() {

  // useState and useEffect
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviesRaw, setMoviesRaw] = useState([]);
  const [youtube, setYoutube] = useState('');
  const [randomItemNumber, setRandomItemNumber] = useState(0);
  const [maxPages, setMaxPages] = useState(0);

  let pageNumber = 1;

  // API from featured and search APIs
  const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

  // initial data pull to fill in lists using getMovie
  useEffect (() => {
    getMovie(FEATURED_API);
  }, []);

  // get the Movie --> list of movies, list of raw data, max pages, youtube
  const getMovie = (API) => {
    try {
      fetch(API + '&page=' + pageNumber)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.results[randomItemNumber]);
        setMovies(data.results);
        setMoviesRaw(data);
        setMaxPages(data.total_pages * 10);
        try {
          setRandomItemNumber(generateRandomNumber(movies.length, 0))
          pageNumber = generateRandomNumber(moviesRaw.total_pages, 1);
          getYouTube(data.results[randomItemNumber].id)
        } catch (err) {
          console.log(err.message);
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  // to get data to fill in youtube video
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

  // generates a random movie via random item and page generator
  const generateRandomMovie = () => {
    // randomItemNumber = generateRandomNumber(movies.length, 0);
    setRandomItemNumber(generateRandomNumber(movies.length, 0));
    pageNumber = generateRandomNumber(moviesRaw.total_pages, 1);
    // setPageNumber(generateRandomNumber(moviesRaw.total_pages, 1));
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
      {/* <Youtube videoId={youtube} /> */}
      <Switch>
        <Route exact path='/login' render={ Login } />
        <Route exact path='/register' render={ Register } />
        <Route exact path='/' render={
          props => (<Search />
        )} />
        <Route exact path='/movie_tinder' render={
          props => (<Tinder movie = { movie }
                            generateRandomMovie={ generateRandomMovie }
                            youtube={ youtube } />
                            // randomItemNumber={ randomItemNumber }
        )} />
      </Switch>
    </Router>
  );
}

export default App;
