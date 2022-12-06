import { ADD_NEW_REVIEW, GET_BEACHES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_BEACHES:
      return payload
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

//ADD_REVIEW_TO_BEACH action
//So reducer to needs to checkit if beach is already there
//then add that new review to beaches data
//then set state as new version with new review
