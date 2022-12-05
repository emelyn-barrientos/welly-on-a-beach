import request from 'superagent'

export function getWellyWeatherData(time) {
  const latitude = '-41.28'
  const longitude = '174.77'
  const airTempVar = 'air.temperature.at-2m'
  const cloudCoverVar = 'cloud.cover'
  const windDirectionVar = 'wind.direction.at-10m'
  const windSpeedVar = 'wind.speed.at-10m'
  const rainRateVar = 'precipitation.rate'
  const allVar =
    airTempVar +
    ',' +
    cloudCoverVar +
    ',' +
    windDirectionVar +
    ',' +
    windSpeedVar +
    ',' +
    rainRateVar
  const url = `https://forecast-v2.metoceanapi.com/point/time?lat=${latitude}&lon=${longitude}&variables=${allVar}&from=${time}`
  return request
    .get(url)
    .set('x-api-key', process.env.MET_KEY)
    .set('accept', 'application/json')
    .then((res) => {
      const airTemp = Math.round(res.body.variables[airTempVar].data[0] - 273) //convert from K to C
      const cloudCover = Math.round(res.body.variables[cloudCoverVar].data[0])
      const windDirection = Math.round(
        res.body.variables[windDirectionVar].data[0]
      )
      const windSpeed = Math.round(
        res.body.variables[windSpeedVar].data[0] * 3.6
      ) //convert m/s to km/h
      const rainRate = Math.round(res.body.variables[rainRateVar].data[0]) //mm/hr
      return { airTemp, cloudCover, windDirection, windSpeed, rainRate }
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}

export function getBeachWindData(latitude, longitude, time) {
  const url = `https://forecast-v2.metoceanapi.com/point/time?lat=${latitude}&lon=${longitude}&variables=wind.speed.at-10m,wind.direction.at-10m&from=${time}`
  return request
    .get(url)
    .set('x-api-key', process.env.MET_KEY)
    .set('accept', 'application/json')
    .then((res) => {
      const windDirection = Math.round(
        res.body.variables['wind.direction.at-10m'].data[0]
      )
      const windSpeed = Math.round(
        res.body.variables['wind.speed.at-10m'].data[0] * 3.6
      ) //convert m/s to km/h
      return { windSpeed, windDirection }
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}

export function getUVData() {
  const url = `https://api.openuv.io/api/v1/uv?lat=-41.29&lng=174.78`
  return request
    .get(url)
    .set('x-access-token', process.env.UV_KEY)
    .then((res) => {
      return Math.round(res.body.result.uv)
    })
    .catch((err) => {
      console.log('Err message: ' + err)
    })
}
