import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import MoviesDAO from "./dao/moviesDAO.js"
import UserDAO from "./dao/userDAO.js"

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.MOVIE_TINDER_DB_URI,
    {
        maxPoolSize: 50,
        // wtimeoutMS: 2500,
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await MoviesDAO.injectBD(client)
    await UserDAO.injectBD(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})