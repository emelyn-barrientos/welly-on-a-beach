import { GET_BEACHES, GET_BEACH_FEATURES, ADD_NEW_REVIEW } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_BEACHES:
      return payload
    case GET_BEACH_FEATURES:
      return state.map((beach) => {
        if (beach.id == payload.id) {
          beach.features = payload.features
          return beach
        } else {
          return beach
        }
      })
    case ADD_NEW_REVIEW:
      // eslint-disable-next-line no-case-declarations
      const foundBeach = state.find((beach) => beach.id === payload.beaches_id)
      foundBeach.reviews.push(payload)
      return [...state]
    default:
      return state
  }
}

export default reducer
