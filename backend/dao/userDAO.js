import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let users

export default class UserDAO {

    // connect with the database
    static async injectBD(conn) {
        if (users) {
            return
        }
        try {
            console.log("successful connection")
            users = await conn.db(process.env.MOVIE_TINDER_NS).collection("users")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in moviesDAO: ${e}`
            )
        }
    }

    // get a specific user account
    static async getUser({
        userName = "jasonthany",
        userEmail = "jasonthany@email.com",
        userPassword = "Password123",
    } = {}) {
        let query
        query = {
                    $and:
                        [
                            { "user_name"  : { $eq : userName      } },
                            { "email"      : { $eq : userEmail     } },
                            { "password"   : { $eq : userPassword  } },
                        ]
                }

        let cursor
        try {
            cursor = await users.findOne(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return  { }
        }

        try {
            return { cursor }
        } catch (e) {
            console.error(`Unable to convert to array or problem counting documents, ${e}`)
            return { }
        }
    }

    // add a new user to the database
    static async createNewUser(userInfo) {
        try {
            const userAccount = {
                _id: ObjectId(userInfo._id), 
                user_name: userInfo.user_name,
                password: userInfo.password,
                email: userInfo.email,
                movies: [],
                preferences: [
                    { 12: 5 },
                    { 16: 5 },
                    { 28: 5 },
                    { 35: 5 },
                    { 80: 5 },
                    { 99: 5 },
                    { 18: 5 },
                    { 10751: 5 },
                    { 14: 5 },
                    { 36: 5 },
                    { 27: 5 },
                    { 10402: 5 },
                    { 9648: 5 },
                    { 10749: 5 },
                    { 878: 5 },
                    { 10770: 5 },
                    { 53: 5 },
                    { 10752: 5 },
                    { 37: 5 },
                ]
            }
            return await users.insertOne(userAccount)
        } catch (e) {
            console.error(`Unable to post review: ${e}`)
            return { error: e }
        }
    }

    // add a new user to the database
    static async updateUser(userInfo) {
        try {
            const updatedUserAccount = await users.updateOne(
                { 
                    user_id: ObjectId(userInfo._id),
                    user_name: userInfo.user_name,
                    email: userInfo.email,
                },
                { 
                    $set: {
                        movies: userInfo.movies,
                        preferences: userInfo.preferences,
                    }
                },
            )

            return updatedUserAccount
        } catch (e) {
            console.error(`Unable to post user: ${e}`)
            return { error: e }
        }
    }

    // DELETE USER?
}


