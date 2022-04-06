import axios from 'axios'

const getUser = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    return response.data
  } catch(error) {
    throw error
  }
}

export default getUser