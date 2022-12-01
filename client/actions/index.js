import { getAllBeaches } from '../apis/beaches'

export const GET_BEACHES = 'GET_BEACHES'

export function getAllBeaches(beaches){
  return {
    type: GET_BEACHES,
    payload: beaches
    
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