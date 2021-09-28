// const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
// const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&api_key=API_KEY&query=`;

// export default {
//     // get the Movie --> list of movies, list of raw data, max pages, youtube
//     getMovie: (API) => {
//         try {
//         fetch(API + '&page=' + pageNumber)
//         .then((res) => res.json())
//         .then((data) => {
//             setMovie(data.results[randomItemNumber]);
//             setMovies(data.results);
//             setMoviesRaw(data);
//             setMaxPages(data.total_pages * 10);
//             console.log(data.results[randomItemNumber]);
//         });
//         } catch (err) {
//             console.log(err.message);
//         }
//     },

//     // Search for movies in the database
//     onSubmitHandler: (search) => {
//         if (search) {
//             pageNumber = 1;
//             setSearch(search);
//             getMovie(SEARCH_API + search);
//         } else {
//             pageNumber = 1;
//             setSearch('');
//             getMovie(FEATURED_API);
//         }
//     },

//     changePageNumber: (pageNum) => {
//         pageNumber = pageNum;
        
//         if (search) {
//             getMovie(SEARCH_API + search);
//         } else {
//             getMovie(FEATURED_API);
//         }
//     }
// }