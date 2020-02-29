import {
  CREATE_LIST
} from '../actions'

const lists = (state = [], action) => {
  switch(action.type) {
    case CREATE_LIST:
      const list = { title: action.title }
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id + 1
      return [...state, { id, ...list }]
    default:
      return state
  }
}

export default lists;