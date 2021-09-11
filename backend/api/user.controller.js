import UserDAO from "../dao/userDAO.js"

export default class UserController {
    // get user account
    static async apiGetUser(req, res, next) {
        try {
            const userEmail = req.body.userEmail
            const userName = req.body.userName
            const userPassword = req.body.password

            const { cursor } = await UserDAO.getUser(
                userEmail,
                userName,
                userPassword,
            )

            res.json(cursor)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    // create new user account
    static async apiCreateNewUser(req, res, next) {
        try {
            const userInfo = req.body.userAccount
            const userResponse = await UserDAO.createNewUser(userInfo)
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }


    // update User Information
    static async apiUpdateUser(req, res, next) {
        try {
            const userInfo = req.body.userAccount
            const userResponse = await UserDAO.createNewUser(userInfo)

            var { error } = userResponse
            if (error) {
                res.status(400).json({ error })
            }

            if (reviewResponse.modifiedCount === 0) {
                throw new Error(
                    "unable to update user info"
                )
            }
        
            res.json({ status: "success" })
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    // DELETE USER??
}