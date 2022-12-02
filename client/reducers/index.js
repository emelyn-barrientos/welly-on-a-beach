import { combineReducers } from 'redux'

import beaches from './beachReducer'
import weather from './weatherReducer'
import windData from './windReducer'

export default combineReducers({
  beaches,
  weather,
  windData,
})
