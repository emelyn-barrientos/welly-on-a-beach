import request from 'superagent'

export function getWeatherData(latitude, longitude, time) {
  //wind speed and direction only - update url variables for additional data
  const url = `https://forecast-v2.metoceanapi.com/point/time?lat=${latitude}&lon=${longitude}&variables=wind.speed.at-10m,wind.direction.at-10m&from=${time}`
  return request
    .get(url)
    .set('x-api-key', process.env.MET_KEY)
    .set('accept', 'application/json')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}
