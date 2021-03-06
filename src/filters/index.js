export function formatDate(ms) {
  const date = new Date(ms)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const strDate = date.getDate().toString().padStart(2, '0')
  return `${date.getFullYear()}-${month}-${strDate}`
}

export function formatDatetime(ms) {
  const date = new Date(ms)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const strDate = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const second = date.getSeconds().toString().padStart(2, '0')
  return `${date.getFullYear()}-${month}-${strDate} ${hour}:${minute}:${second}`
}
