import MoviesDAO from "../dao/moviesDAO.js"

export default class MoviesController {
    static async apiGetMovies(req, res, next) {
        const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20
        const page = req.query.page ? parseInt(page, 10) : 0
        const genre_id = req.query.genre_id
        const ratingLower = req.query.ratingLower
        const ratingUpper = req.query.ratingUpper
        const dateTimeLower = req.query.dateTimeLower
        const dateTimeUpper = req.query.dateTimeUpper

        const { moviesList, totalNumMovies } = await MoviesDAO.getMovies( {
            // filters
            genre_id,
            ratingLower,
            ratingUpper,
            dateTimeLower,
            dateTimeUpper,
            
            // pages
            page,
            moviesPerPage,
        })

        let response = {
            movies: moviesList,
            page: page,
            // filters: filters,
            entries_per_page: moviesPerPage,
            total_results: totalNumMovies,
        }
        res.json(response)
    }
}