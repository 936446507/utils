
function formatTime(second, type, isAutoConvert = true, isUpwardConvert = true) {
  const timeInfo = {
    ss: {
      unit: 1,
      name: '秒',
    },
    mm: {
      unit: 60,
      name: '分钟'
    },
    hh: {
      unit: 60 * 60,
      name: '小时'
    },
    dd: {
      unit: 60 * 60 * 24,
      name: '天'
    }
  }
  second = Number(second)
  if (second <= 0) return false

  if (!isAutoConvert) {
    const curTime = timeInfo[type]
    return Math.floor(second / curTime.unit) + curTime.name
  }

  const timeTypes = Object.keys(timeInfo)
  if (!!timeInfo[type]) {
    const timeTypeIndex = timeTypes.indexOf(type)
    timeTypes.splice(timeTypeIndex + 1)
  }
  let result = ''

  for (let i = timeTypes.length - 1; i >= 0; i--) {
    const curTime = timeInfo[timeTypes[i]]
    const conversionResult = Math.floor(second / curTime.unit)
    if (conversionResult > 0) {
      second -= conversionResult * curTime.unit
      result += conversionResult + curTime.name
    }
  }

  return result
}

formatTime(3601, 'mm')