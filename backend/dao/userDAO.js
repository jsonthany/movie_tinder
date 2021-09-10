let user

export default class MoviesDAO {
    static async injectBD(conn) {

        if (user) {
            return
        }
        try {
            user = await conn.db(process.env.MOVIE_TINDER_NS).collection("users")            
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in moviesDAO: ${e}`
            )
        }
    }

    static async getUser({
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
                            { $cond: [ { $eq: [ genre_id, "" ] }, true, { $elemMatch:   [ "$genre_ids",         parseInt(genre_id)      ] } ] },
                            { $cond: [ { $eq: [ rating, "" ] }, true,   { $gte:         [ "$vote_average",      parseFloat(ratingLower) ] } ] },
                            { $cond: [ { $eq: [ rating, "" ] }, true,   { $lte:         [ "$vote_average",      parseFloat(ratingUpper) ] } ] },
                            { $cond: [ { $eq: [ dateTime, "" ] }, true, { $eq: [ "$release_date", dateTime ] } ] },
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


