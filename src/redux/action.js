import {INCREMENT,CHANGE_COUNT,DECREMENT,ADD_LIST,ADD_ITEM} from './types'

export const increment = () => {
  return{
    type:INCREMENT
  }
}
export const changeCount = () => {
  return{
    type:CHANGE_COUNT
  }
}
export const decrement = () => {
  return {
    type:DECREMENT
  }
}

export const addList = (body) => {
  return {
    type:ADD_LIST,
    payload:body
  }
}

export const addItem = (id) => {
  return{
    type:ADD_ITEM,
    payload:id
  }
}