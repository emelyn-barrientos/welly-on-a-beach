import { getAllBeaches } from '../apis/index.js'

export const GET_BEACHES = 'GET_BEACHES'

export function getAllBeachesAction(beaches) {
  return {
    type: GET_BEACHES,
    payload: beaches,
  }
}

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
