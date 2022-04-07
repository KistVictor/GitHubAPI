import { createStore } from "redux";

const INITIAL_STATE = {
  user: {
    login: 'pesquise um usuário acima',
    avatar_url: "https://avatars.githubusercontent.com/u/3356192?v=4"
  }
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'CHANGE_USER') {
    return { user: action.user }
  }

  return state
}

const store = createStore(reducer)

export default store