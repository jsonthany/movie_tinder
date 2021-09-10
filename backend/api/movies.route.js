import express from "express"
import MoviesController from "./movies.controller.js"
import UserController from "./user.controller.js"

const router = express.Router()

router.route("/movies").get(MoviesController.apiGetMovies)

router
    .route("/users")
    .get(UserController.apiGetUser)
    // .post(UserController.apiCreateNewUser)
    // .put(UserController.apiUpdateUser)
    // .delete(UserController.apiDeleteReview)

export default router