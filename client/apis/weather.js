import request from 'superagent'

export function getWellyWeatherData(time) {
  const latitude = '-41.1711'
  const longitude = '174.4632'
  const airTempVar = 'air.temperature.at-2m'
  const cloudCoverVar = 'cloud.cover'
  const windDirectionVar = 'wind.direction.at-10m'
  const windSpeedVar = 'wind.speed.at-10m'
  const allVar =
    airTempVar +
    ',' +
    cloudCoverVar +
    ',' +
    windDirectionVar +
    ',' +
    windSpeedVar
  const url = `https://forecast-v2.metoceanapi.com/point/time?lat=${latitude}&lon=${longitude}&variables=${allVar}&from=${time}`
  return request
    .get(url)
    .set('x-api-key', process.env.MET_KEY)
    .set('accept', 'application/json')
    .then((res) => {
      const airTemp = res.body.variables[airTempVar].data[0]
      const cloudCover = res.body.variables[cloudCoverVar].data[0]
      const windDirection = res.body.variables[windDirectionVar].data[0]
      const windSpeed = res.body.variables[windSpeedVar].data[0]
      return { airTemp, cloudCover, windDirection, windSpeed }
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}

export function getBeachWindData(latitude, longitude, time) {
  //wind speed and direction only
  console.log('fetching wind data')
  const url = `https://forecast-v2.metoceanapi.com/point/time?lat=${latitude}&lon=${longitude}&variables=wind.speed.at-10m,wind.direction.at-10m&from=${time}`
  return request
    .get(url)
    .set('x-api-key', process.env.MET_KEY)
    .set('accept', 'application/json')
    .then((res) => {
      const windDirection = res.body.variables['wind.direction.at-10m'].data[0]
      const windSpeed = res.body.variables['wind.speed.at-10m'].data[0]
      return { windSpeed, windDirection }
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}
