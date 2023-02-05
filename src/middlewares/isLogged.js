export default async function isLogged(req, res, next) {
  try {
    console.log('middale isLogged')

    next()
  } catch (error) {
    console.error(error)
  }
}
