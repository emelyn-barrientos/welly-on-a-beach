export function getTime() {
  const date = new Date()
  const timeString = date.toISOString()
  return timeString
}

export function getTimeForUV() {
  const date = new Date()
  let day = date.getUTCDate()
  let month = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()
  let hour = date.getUTCHours()

  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }
  if (hour < 10) {
    hour = '0' + hour
  }

  const timeString = `${year}-${month}-${day}T${hour}:00:00.000Z`

  return timeString
}

export function getLocalWellyDate(date) {
  const otherDate = new Date(date)
  const wellyDateString = otherDate.toDateString()
  return wellyDateString
}

export function getPointsFromAngle(angle, vector_length, start_position) {
  //angle given is direction from which wind is blowing (360 is northerly)
  const radians = degreesToRadians(angle - 180)
  const h = vector_length
  const x1 = start_position
  const y1 = start_position
  const y2 = Math.cos(radians) * h + start_position
  const x2 = -Math.sin(radians) * h + start_position
  return { x1, y1, x2, y2 }
}

function degreesToRadians(angle) {
  const pi = Math.PI
  const radians = (angle + 180) * (pi / 180)
  return radians
}

export function getUVLevel(uv, size) {
  let colour = ''
  let level = ''
  let width = 0
  const maxLevel = 11
  const maxWidth = size * 0.9
  if (uv <= 2) {
    level = 'low'
    colour = '#FFBD00'
  } else if (uv <= 5 && uv > 2) {
    level = 'moderate'
    colour = '#FF5400'
  } else if (uv <= 7 && uv > 5) {
    level = 'high'
    colour = '#FF0054'
  } else if (uv <= 10 && uv > 7) {
    level = 'high'
    colour = '#FF0054'
  } else if (uv > 10) {
    level = 'extreme'
    colour = '#390099'
  }
  width = (uv / maxLevel) * maxWidth
  return { level, colour, width }
}

export function chooseIcon(rainRate, cloudCover) {
  let icon = ''
  if (rainRate > 0) {
    icon = 'rainy'
  } else if (cloudCover > 50) {
    icon = 'cloudy'
  } else if (cloudCover > 25) {
    icon = 'cloudySun'
  } else {
    icon = 'sun'
  }
  return icon
}
