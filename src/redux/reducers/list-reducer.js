import { ADD_LIST } from "../types"
import { ADD_ITEM } from './../types';

const defaultState = {
  list: JSON.parse(localStorage.getItem('list')) || [],
  item:{}
}
export const listReducer = (state = defaultState, action) => {
  const { list,item } = state
  const { payload, type } = action;
  switch (type) {
    case ADD_LIST: {
      const newItem = {
        id: Date.now(),
        firstName: payload.firstName,
        lastName: payload.lastName,
        adress: payload.adress,
        date: payload.date,
        phone: payload.phone,
        gender: payload.gender
      }
      const newArr = [...list, newItem]
      return {
        ...state,
        list: newArr
      }
    }
    case ADD_ITEM:{
      const newItem = list.find(elem => elem.id === payload)
    return{
      ...state,
      item:newItem
    }
    }
    default:
      return state
  }
}