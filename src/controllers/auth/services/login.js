import { sign } from "jsonwebtoken"
import user from '../../../database/models/user.js'
export default function login({ user_name, password }) {
  console.log(user_name)
}