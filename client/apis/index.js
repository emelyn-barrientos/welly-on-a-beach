import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllBeaches() {
  return request.get(rootUrl + '/beaches').then((res) => {
    return res.body
  })
}

export function addReview(newReview) {
  return request
    .post(rootUrl + '/beaches')
    .send(newReview)
    .then((res) => {
      return res.body
    })
}

export function getBeachFeatures(beachId) {
  return request.get(rootUrl + `/features/${beachId}`).then((res) => {
    return res.body
  })
}
