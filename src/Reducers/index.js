import { combineReducers } from 'redux'


const anything = (state=[], action) => {
  switch(action.type) {
    case 'CHARACTERS':
        return action.characters
    default: 
        return state
  }
}

export default combineReducers({
    anything,
})