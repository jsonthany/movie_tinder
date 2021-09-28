import { Row, Layout, Pagination } from 'antd';
import './Search.css';
import SearchBar from './SearchBar'
import Movies from './Movies'
import { useState, useEffect } from 'react';
import Pages from './Pages';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&api_key=API_KEY&query=`;

const Search = () => {

    const { Header, Footer, Content } = Layout;

    const [movie, setMovie] = useState('');
    const [movies, setMovies] = useState([]);
    const [moviesRaw, setMoviesRaw] = useState([]);
    const [search, setSearch] = useState('');
    const [randomItemNumber, setRandomItemNumber] = useState(0);
    const [maxPages, setMaxPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    
    // let pageNumber = 1;

    // initial data pull to fill in lists using getMovie
    useEffect (() => {
        if (!search) {
            getMovie(FEATURED_API);
        } else {
            getMovie(SEARCH_API + search);
        }
        
    }, [movies, search]);

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
            console.log(data.results[randomItemNumber]);
        });
        } catch (err) {
            console.log(err.message);
        }
    }

    // Search for movies in the database
    const onSubmitHandler = (search) => {
        setPageNumber(1);
        
        if (search) {
            setSearch(search);
            // getMovie(SEARCH_API + search);
        } else {
            setSearch('');
            getMovie(FEATURED_API);
        }

        console.log(pageNumber)
    }

    const changePageNumber = (pageNum) => {
        setPageNumber(pageNum);
        
        if (search) {
            getMovie(SEARCH_API + search);
        } else {
            getMovie(FEATURED_API);
        }
    }

    return (
        <Layout className="search">
            <Header className="searchbar">
                <SearchBar  className="searchbar"
                            searchfn={ onSubmitHandler }
                            style={{ marginBottom: 100 }} />
            </Header>
            <Content className="content">
                <Row justify="space-around">
                    {movies.map(movie =>
                        <Movies className='movies_container'
                                key={movie.id} {...movie} />
                    )}
                </Row>
                <br />
                <br />
                <Row justify="center">
                    <Pages 
                        pageNumber={ pageNumber }
                        maxPages={ maxPages }
                        changePageNumber={ changePageNumber }/>
                </Row>
            </Content>
            <Footer className="footer">
                RandomMovieGenerator @2021 / Search
            </Footer>
        </Layout>
    )
}

export default Search
