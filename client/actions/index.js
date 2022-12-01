import { fetchAllBeaches } from '../apis/beaches'


export function getAllBeachesThunk() {
  return (dispatch) => {
   getBeaches()
   .then((beaches) => {
      dispatch(getAllBeaches(beaches))
   })
   .catch((err) => {
    console.log(err.message)
   })
  }
}