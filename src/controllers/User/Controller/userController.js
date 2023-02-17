const userCreate = require('../services/userCreate.js')
const userUpdate = require('../services/userUpdate.js')
const userDelete = require('../services/userDelete.js')
const getUser = require('../services/getUser.js')

class UserController {

  async getUser(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({ error: "Id is required" })
      }

      const user = await getUser({ id })

      if (!user) {
        return res.status(404).json({ error: "User does not exist" })
      }

      return res.status(200).json(user)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  async getAllUsers(req, res) {
    try {
      console.log(req.user)
      if (!req.user.is_admin) {
        return res.status(401).json({ msg: "Not admin" })
      }

      const users = await getUser({ id: null });

      return res.status(200).json(users)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  async create(req, res) {
    try {
      const user = await userCreate({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        is_admin: req.body.is_admin || false
      })

      if (!user) {
        return res.status(400).json({ error: user })
      }

      return res.status(201).json(user)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({ error: "Missing Id" })
      }

      const user = await userUpdate({
        name: req.body.name,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password,
        id,
        is_admin: req.body.is_admin || false
      })

      if (!user) {
        return res.status(400).json("invalid data")
      }

      return res.status(201).json(user)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      const deleted_user = await userDelete({ id })

      return res.status(204).json(deleted_user)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Internal Server Error" })
    }
  }
}

module.exports = new UserController()