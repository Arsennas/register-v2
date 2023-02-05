import { combineReducers } from "redux"
import {listReducer} from './list-reducer'
// import { likeReducer } from "./like-reducer"
// import { countReducer } from "./count-reducer"

export const rootReducer = combineReducers({
  // likeReducer,
  // countReducer
  listReducer
})