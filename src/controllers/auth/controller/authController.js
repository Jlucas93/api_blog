import login from '../services/login';

class AuthController {
  async login(req, res) {
    try {
      const { user_name, password } = req.body
      login({ user_name: 'Lucas' })

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal Server Error" })
    }
  }
}

export default new AuthController()