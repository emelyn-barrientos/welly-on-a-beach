export function getTime() {
  const date = new Date()
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  let day = date.getDate().toString()
  if (day.length < 2) {
    day = '0' + day
  }
  if (month.length < 2) {
    day = '0' + day
  }
  const hour = date.getHours().toString()
  const minutes = date.getMinutes().toString()
  const timeString = `${year}-${month}-${day}T${hour}%3A${minutes}%3A00Z`
  return timeString
}
