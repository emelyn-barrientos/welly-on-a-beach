import { getWellyWeatherData, getBeachWindData, getUV } from '../apis/weather'
import { getAllBeaches } from '../apis/index.js'

export const GET_BEACHES = 'GET_BEACHES'
export const GET_WELLY_WEATHER = 'GET_WELLY_WEATHER'
export const GET_BEACH_WIND = 'GET_BEACH_WIND'
export const GET_WELLY_UV = 'GET_WELLY_UV'

export function getAllBeachesAction(beaches) {
  return {
    type: GET_BEACHES,
    payload: beaches,
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

export function getWellyUVAction(uv) {
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

export function getWellyUVThunk() {
  return (dispatch) => {
    getUV()
      .then((uv) => {
        dispatch(getWellyUVAction(uv))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
