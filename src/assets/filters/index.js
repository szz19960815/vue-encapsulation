/**
 * 时间戳格式化
 */
function arrangeDate (date) {
  let d = new Date(date * 1000)
  let year = d.getFullYear()
  let month = ('0' + (d.getMonth() + 1)).slice(-2)
  let day = ('0' + (d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate())).slice(-2)
  let hour = ('0' + d.getHours()).slice(-2)
  let minutes = ('0' + d.getMinutes()).slice(-2)
  let seconds = ('0' + d.getSeconds()).slice(-2)
  return {
    year, month, day, hour, minutes, seconds
  }
}
/**
 * 格式化至天
 */
let formatDateD = (date) => {
  let res = arrangeDate(date)
  return res.year + '-' + res.month + '-' + res.day
}
/**
 * 格式化至分
 */
let formatDateM = (date) => {
  let res = arrangeDate(date)
  return res.year + '-' + res.month + '-' + res.day + ' ' + res.hour + ':' + res.minutes
}
/**
 * 格式化至秒
 */
let formatDateS = (date) => {
  let res = arrangeDate(date)
  return res.year + '-' + res.month + '-' + res.day + ' ' + res.hour + ':' + res.minutes + ':' + res.seconds
}

/**
 * 性别判断
 */
let sex = (val) => {
  if (!val) return '未知'
  return (val === 1 ? '男' : (val === 2 ? '女' : '未知'))
}

export default {
  formatDateD, formatDateM, formatDateS, sex
}
