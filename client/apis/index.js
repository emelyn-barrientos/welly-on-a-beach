import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllBeaches() {
  return request.get(rootUrl + '/beaches').then((res) => {
    return res.body
  })
}

export function getBeachFeatures(beachId) {
  return request.get(rootUrl + `/features/${beachId}`).then((res) => {
    return res.body
  })
}
