import express from "express"
import MoviesController from "./movies.controller.js"

const router = express.Router()

router.route("/").get(MoviesController.apiGetMovies)

// router
//     .route("/review")
//     .post(ReviewsCtrl.apiPostReview)
//     .put(ReviewsCtrl.apiUpdateReview)
//     .delete(ReviewsCtrl.apiDeleteReview)

export default router