import { createStore } from "redux";

const INITIAL_STATE = {
  user: {
    waiting: true,
    avatar_url: "https://64.media.tumblr.com/17fea920ff36ef4f5b877d5216a7aad9/tumblr_mo9xje8zZ41qcbiufo1_1280.gif"
  },
  repos: [],
  stars: []
}

function reducer(state = INITIAL_STATE, action) {

  if (action.type === 'CHANGE_USERDATA') {
    return {
      user: action.user,
      repos: action.repos,
      stars: action.stars
    }
  }

  return state
}

const store = createStore(reducer)

export default store