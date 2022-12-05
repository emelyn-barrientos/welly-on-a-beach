export function getTime() {
  const date = new Date()
  const year = date.getFullYear().toString()
  let month = (date.getMonth() + 1).toString()
  let day = date.getDate().toString()
  if (day.length < 2) {
    day = '0' + day
  }
  if (month.length < 2) {
    month = '0' + month
  }
  let hour = date.getHours().toString()
  if (hour.length < 2) {
    hour = '0' + hour
  }
  let minutes = date.getMinutes().toString()
  if (minutes.length < 2) {
    minutes = '0' + minutes
  }
  const timeString = `${year}-${month}-${day}T${hour}%3A${minutes}%3A00Z`
  return timeString
}

export function getPointsFromAngle(angle, vector_length, start_position) {
  const radians = degreesToRadians(angle)
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
