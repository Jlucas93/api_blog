const login = require('../services/login.js')

class AuthController {

  async login(req, res) {
    try {
      const { user_name, password } = req.body
      const result = await login({ user_name, password })

      if (!result) {
        return res.status(401).json({ error: result })
      }
      return res.status(200).json(result)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal Server Error" })
    }
  }
}

module.exports = new AuthController()