import { GET_WELLY_WEATHER, GET_WELLY_UV } from '../actions'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_WELLY_WEATHER:
      return { ...state, metData: payload }
    case GET_WELLY_UV:
      return { ...state, uv: payload }
    default:
      return state
  }
}

export default reducer
