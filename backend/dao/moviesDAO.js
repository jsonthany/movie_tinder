import fetch from "node-fetch"
import dotenv from "dotenv"

import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

dotenv.config()
let movies

export default class MoviesDAO {
    static async injectBD(conn) {

        const API_KEY = process.env.MOVIE_API_KEY
        const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`

        // let pageNumber = 0

        if (movies) {
            return
        }
        try {
            movies = await conn.db(process.env.MOVIE_TINDER_NS).collection("movies_raw")
            // movies.deleteMany({})
            
            try {
                fetch(FEATURED_API + '&page=' + 1)
                .then((res) => res.json())
                .then((data) => {
                    for (let i = Number(data.total_pages) - 1; i >= 0 ; i--) {
                        // // try {
                        //     fetch(FEATURED_API + `&page=${i + 1}`)
                        //     .then((res) => res.json())
                        //     .then((data) => {
                        //         for (let i = 0; i < Number(data.results.length); i++) {
                        //             movies.updateOne(
                        //                 { 
                        //                     _id: data.results[i].id 
                        //                 },
                        //                 {
                        //                     $set: {
                        //                         _id: data.results[i].id,
                        //                         adult: data.results[i].adult,
                        //                         backdrop_path: data.results[i].backdrop_path,
                        //                         genre_ids: data.results[i].genre_ids,
                        //                         original_language: data.results[i].original_language,
                        //                         original_title: data.results[i].original_title,
                        //                         overview: data.results[i].overview,
                        //                         popularity: data.results[i].popularity,
                        //                         poster_path: data.results[i].poster_path,
                        //                         release_date: data.results[i].release_date,
                        //                         title: data.results[i].title,
                        //                         video: data.results[i].video,
                        //                         vote_average: data.results[i].vote_average,
                        //                         vote_count: data.results[i].vote_count,
                        //                     }
                        //                 }, { upsert: true }
                        //             )
                                    
                        //         }
                        //     })
                        // // } catch (err) {
                        // //     console.log(err.message);
                        // // }
                    }
                })
            } catch (err) {
                console.log(err.message);
            }
            
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in moviesDAO: ${e}`
            )
        }
    }

    static async getMovies({
        genre_id = "",
        ratingLower = "",
        ratingUpper = "",
        dateTimeLower = "",
        dateTimeUpper = "",
        page = 0,
        moviesPerPage = 20,
    } = {}) {

        let query
        query = {
                    $expr: {
                        $and: [
                            { $cond: [ { $eq: [ genre_id, "" ] }, true,         { $in:          [ parseInt(genre_id),   "$genre_ids"    ] } ] },
                            { $cond: [ { $eq: [ ratingLower, "" ] }, true,      { $gte:         [ "$vote_average",      ratingLower     ] } ] },
                            { $cond: [ { $eq: [ ratingUpper, "" ] }, true,      { $lte:         [ "$vote_average",      ratingUpper     ] } ] },
                            { $cond: [ { $eq: [ dateTimeLower, "" ] }, true,    { $gte:         [ "$release_date",      dateTimeLower   ] } ] },
                            { $cond: [ { $eq: [ dateTimeUpper, "" ] }, true,    { $lte:         [ "$release_date",      dateTimeUpper   ] } ] },
                        ]
                    }
                }

        let cursor
        try {
            cursor = await movies.find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { moviesList: [], totalNumMovies: 0 }
        }

        const displayCursor = cursor.limit(moviesPerPage).skip(moviesPerPage * page)

        try {
            const moviesList = await displayCursor.toArray()
            const totalNumMovies = await movies.countDocuments(query)

            return { moviesList, totalNumMovies }
        } catch (e) {
            console.error(`Unable to convert to array or problem counting documents, ${e}`)
            return { moviesList: [], totalNumMovies: 0 }
        }
    }
}


