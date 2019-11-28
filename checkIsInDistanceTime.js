/*
  * formateDate(date, "yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
  * formateDate(date, "yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
  * formateDate(date, "yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
  * formateDate(date, "yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
  * formateDate(date, "yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
  * HH: 24小时进制, hh: 12小时进制
*/

function formatDate(date = new Date(), fmt = 'yyyy-MM-dd HH:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  const week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[date.getDay() + ''])
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/*
  * 获取指定时间范围的时间日期
  * @param { string } baseTime 时间日期 2019-11-1
  * @param { string } rangeTime 时间范围 1y1M1d
  * @return { string } 时间日期 2019-11-1
*/
function getRangeTime(baseTime, rangeTime) {
  // 年月日数字各自相加
  const time = rangeTime.replace(/(\d+y)?(\d+M)?(\d+d)?/, (match, ...matchInfo)  => {
    return baseTime.split('-')
      .reduce((result, item, index) => {
        const num = Number(matchInfo[index].replace(/y|M|d/, '')) || 0
        result.push(Number(item) + num)
        return result
      }, [])
      .join('-')

  })
  let [ year, month, day ] = time.split('-').map(item => +item)
  let monthMaxDay = new Date(year, month, 0).getDate()

  while(day > monthMaxDay) {
    day -= monthMaxDay
    month += 1
    monthMaxDay = new Date(year, month, 0).getDate()
  }

  while (Math.floor(month / 12)) {
    month -= 12
    year += 1
  }

  return `${year}-${month}-${day}`
}

/*
  * 检查当前日期是否是基准日期时间的指定时间范围内
  * @param { date } baseDate 基准日期时间
  * @param { string } startTime 时间范围 1y1M1d
  * @param { string } endTime 时间范围 1y1M1d
  * @return boolean
*/

function checkIsInRangeTime(baseDate, startTime, endTime) {
  const now = new Date()
  const baseTime = formatDate(baseDate, 'yyyy-MM-dd')
  const start = getRangeTime(baseTime, startTime)
  const startDate = new Date(start)

  if (endTime) {
    const end = getRangeTime(baseTime, endTime)
    const endDate = new Date(end)
    return now >= startDate && now < endDate
  } else {
    return startDate <= now
  }
}