import { combineReducers } from 'redux'

import beaches from './beachReducer'
import weather from './weatherReducer'
import windData from './windReducer'
import features from './featuresReducer'

export default combineReducers({
  beaches,
  weather,
  windData,
  features,
})
