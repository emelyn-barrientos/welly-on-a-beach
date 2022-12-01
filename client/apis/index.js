import request from 'superagent'

const rootUrl = '/api/v1'

export function getAllBeaches() {
  return request.get(rootUrl + '/beaches').then((res) => {
    return res.body.beaches
  })
}
