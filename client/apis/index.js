import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllBeaches() {
  return request.get(rootUrl + '/beaches').then((res) => {
    return res.body
  })
}

export function addReview(newReview) {
  console.log('addReview(newReview): ', newReview)
  return request
    .post(rootUrl + '/beaches')
    .send(newReview)
    .then((res) => {
      console.log('res: ', res)
      return res.body
    })
}
