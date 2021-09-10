import MoviesDAO from "../dao/moviesDAO.js"

export default class MoviesController {
    static async apiGetMovies(req, res, next) {
        const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20
        const page = req.query.page ? parseInt(page, 10) : 0
        const genre_id = req.query.moviesPerPage
        const ratingLower = req.query.moviesPerPage
        const ratingUpper = req.query.moviesPerPage
        const dateTimeLower = req.query.moviesPerPage
        const dateTimeUpper = req.query.moviesPerPage

        const { moviesList, totalNumMovies } = await MoviesDAO.getMovies( {
            ratingLower,
            ratingUpper,
            page,
            moviesPerPage
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