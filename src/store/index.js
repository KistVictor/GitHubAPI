import { createStore } from "redux";

function reducer() {
  return {
    user: 'victor',
    data: 'teste'
  }
}

const store = createStore(reducer)

export default store