class UserController {

  index(req, res) {

    const user = {
      name: 'Lucas',
      age: 29
    }

    return res.status(200).json(user)
  }
}

export default new UserController()