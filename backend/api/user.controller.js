import UserDAO from "../dao/userDAO.js"

export default class UserController {
    static async apiCreateNewUser(req, res, next) {
        // const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20
        // const page = req.query.page ? parseInt(page, 10) : 0

        // let filters = {}
        // if (req.query.cuisine) {
        //     filters.cuisine = req.query.cuisine
        // } else if (req.query.zipcode) {
        //     filters.zipcode = req.query.zipcode
        // } else if (req.query.name) {
        //     filters.name = req.query.name
        // }

        // const { moviesList, totalNumMovies } = await MoviesDAO.getMovies( {
        //     filters,
        //     page,
        //     moviesPerPage
        // })

        // let response = {
        //     movies: moviesList,
        //     page: page,
        //     filters: filters,
        //     entries_per_page: moviesPerPage,
        //     total_results: totalNumMovies,
        // }
        // res.json(response)
    }

    static async apiUpdateUser(req, res, next) {
        // const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20
        // const page = req.query.page ? parseInt(page, 10) : 0

        // let filters = {}
        // if (req.query.cuisine) {
        //     filters.cuisine = req.query.cuisine
        // } else if (req.query.zipcode) {
        //     filters.zipcode = req.query.zipcode
        // } else if (req.query.name) {
        //     filters.name = req.query.name
        // }

        // const { moviesList, totalNumMovies } = await MoviesDAO.getMovies( {
        //     filters,
        //     page,
        //     moviesPerPage
        // })

        // let response = {
        //     movies: moviesList,
        //     page: page,
        //     filters: filters,
        //     entries_per_page: moviesPerPage,
        //     total_results: totalNumMovies,
        // }
        // res.json(response)
    }

    static async apiDeleteReview(req, res, next) {
        // const moviesPerPage = req.query.moviesPerPage ? parseInt(req.query.moviesPerPage, 10) : 20
        // const page = req.query.page ? parseInt(page, 10) : 0

        // let filters = {}
        // if (req.query.cuisine) {
        //     filters.cuisine = req.query.cuisine
        // } else if (req.query.zipcode) {
        //     filters.zipcode = req.query.zipcode
        // } else if (req.query.name) {
        //     filters.name = req.query.name
        // }

        // const { moviesList, totalNumMovies } = await MoviesDAO.getMovies( {
        //     filters,
        //     page,
        //     moviesPerPage
        // })

        // let response = {
        //     movies: moviesList,
        //     page: page,
        //     filters: filters,
        //     entries_per_page: moviesPerPage,
        //     total_results: totalNumMovies,
        // }
        // res.json(response)
    }
}