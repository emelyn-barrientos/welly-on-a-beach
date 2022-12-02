import request from 'superagent'

export function getWellyWeatherData(time) {
  //TODO: update url for call to weather data
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

export function getBeachWindData(latitude, longitude, time) {
  //wind speed and direction only
  const url = `https://forecast-v2.metoceanapi.com/point/time?lat=${latitude}&lon=${longitude}&variables=wind.speed.at-10m,wind.direction.at-10m&from=${time}`
  return request
    .get(url)
    .set('x-api-key', process.env.MET_KEY)
    .set('accept', 'application/json')
    .then((res) => {
      const windDirection = res.body.variables['wind.direction.at-10m'].data
      const windSpeed = res.body.variables['wind.speed.at-10m'].data
      return { windSpeed, windDirection }
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}
