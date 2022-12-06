import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllBeaches() {
  return request.get(rootUrl + '/beaches').then((res) => {
    return res.body
  })
}

export function getBeachFeatures() {
  return request.get(rootUrl + '/features').then((res) => {
    return res.body
  })
}
