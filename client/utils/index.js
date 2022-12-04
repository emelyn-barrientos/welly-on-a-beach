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
