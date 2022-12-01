import { getAllBeaches } from '../apis/beaches'


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