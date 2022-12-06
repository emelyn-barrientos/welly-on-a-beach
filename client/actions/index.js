import {
  getWellyWeatherData,
  getBeachWindData,
  getUVDataNIWA,
} from '../apis/weather'
import { getAllBeaches, getBeachFeatures } from '../apis/index.js'

export const GET_BEACHES = 'GET_BEACHES'
export const GET_WELLY_WEATHER = 'GET_WELLY_WEATHER'
export const GET_BEACH_WIND = 'GET_BEACH_WIND'
export const GET_WELLY_UV = 'GET_WELLY_UV'
export const GET_BEACH_FEATURES = 'GET_BEACH_FEATURES'

export function getAllBeachesAction(beaches) {
  return {
    type: GET_BEACHES,
    payload: beaches,
  }
}

export function getBeachFeaturesAction(beach_id, features) {
  return {
    type: GET_BEACH_FEATURES,
    payload: { id: beach_id, features: features },
  }
}

export function getWellyWeatherDataAction(weather) {
  return {
    type: GET_WELLY_WEATHER,
    payload: weather,
  }
}

export function getBeachWindDataAction(windData, id) {
  return {
    type: GET_BEACH_WIND,
    payload: { id: id, windData: windData },
  }
}

export function getWellyUVDataAction(uv) {
  return {
    type: GET_WELLY_UV,
    payload: uv,
  }
}

//THUNKS

export function getAllBeachesThunk() {
  return (dispatch) => {
    getAllBeaches()
      .then((beaches) => {
        dispatch(getAllBeachesAction(beaches))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function getWellyWeatherDataThunk(time) {
  return (dispatch) => {
    getWellyWeatherData(time)
      .then((weather) => {
        dispatch(getWellyWeatherDataAction(weather))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function getBeachWindDataThunk(latitude, longitude, time, beach_id) {
  return (dispatch) => {
    getBeachWindData(latitude, longitude, time)
      .then((windData) => {
        dispatch(getBeachWindDataAction(windData, beach_id))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function getBeachFeaturesThunk(beachId) {
  return (dispatch) => {
    getBeachFeatures(beachId)
      .then((features) => {
        const formatedFeatures = features.map((feature) => feature.feature)
        dispatch(getBeachFeaturesAction(beachId, formatedFeatures))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function getWellyUVDataThunk(time) {
  return (dispatch) => {
    getUVDataNIWA(time)
      .then((uv) => {
        dispatch(getWellyUVDataAction(uv))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
