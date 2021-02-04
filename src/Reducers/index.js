import { combineReducers } from 'redux'


const anything = (state=[], action) => {
  switch(action.type) {
    case 'CHARACTERS':
        return action.characters
    default: 
        return state
  }
}

const myFav = (state=[], action) => {
  switch(action.type) {
    case 'FAVCHARACTER':
      return [...state, action.myFav]
    default:
      return state
  }
}

export default combineReducers({
    anything, myFav,
})