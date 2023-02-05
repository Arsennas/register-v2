import {INCREMENT,DECREMENT} from '../types'

const defaultState ={
  like: 1
}
export const likeReducer = (state = defaultState,action) => {
  const {like} = state;
  const {type} = action;
  switch (type) {
    case INCREMENT: {
      return{
        ...state,
        like:like + 1
      }
    }
    case DECREMENT: {
      return{
        ...state,
        like:like - 1
      }
    }
    default:
      return state
  }
}