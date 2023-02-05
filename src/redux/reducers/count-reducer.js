import {CHANGE_COUNT} from '../types'

const defaultState ={
  count: 1
}
export const countReducer = (state = defaultState,action) => {
  const {count} = state;
  const {type} = action;
  switch (type) {
    case CHANGE_COUNT: {
      return{
        ...state,
        count:count - 1 
      }
    }
    default:
      return state
  }
}