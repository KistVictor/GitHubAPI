import axios from 'axios'

const getUserData = async (user) => {
  try {
    const gitHubUser = await axios.get(`https://api.github.com/users/${user}`)
    const repos = await axios.get(`https://api.github.com/users/${user}/repos`)
    const stars = await axios.get(`https://api.github.com/users/${user}/starred`)
    return {
      user: gitHubUser.data,
      repos: repos.data,
      stars: stars.data
    }
  } catch(error) {
    throw error
  }
}

export default getUserData