import { createStore } from "redux";

const initialState = {
  user: {
    login: 'pesquise um usuário acima'
  }
}

function reducer(state = initialState, action) {
  if (action.type === 'CHANGE_USER') {
    return { user: action.user }
  }

  return state
}

const store = createStore(reducer)

export default store