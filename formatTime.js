/*
  @param second int 时间秒数
  @param type string 转换的时间类型(ss: 秒, mm: 分钟, hh: 小时， dd: 天)
  @param isAutoUpwardConvert boolean 是否自动向上转换,例如: formatTime(3601, 'mm', true) => '1小时1秒' 而不是'60分钟1秒'
*/
function formatTime(second, type, isAutoUpwardConvert = false) {
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
      unit: 60,
      name: '小时'
    },
    dd: {
      unit: 24,
      name: '天'
    }
  }
  second = Number(second)
  if (second <= 0) return false

  const timeTypes = Object.keys(timeInfo)
  const defaultTimeType = timeTypes[0]
  const convertTime = function convertTime(time, timeType, callback) {
    const timeTypeIndex = timeTypes.indexOf(timeType)
    const timeTypEndIndex = timeTypeIndex >= 0 ? timeTypeIndex : 0

    for (let i = timeTypes.length - 1; i >= timeTypEndIndex; i--) {
      const unit = getUnitConversion(timeInfo, timeType, timeTypes[i])
      const conversionResult = Math.floor(time / unit)
      if (conversionResult > 0) {
        callback && callback(i, unit, conversionResult)
        time = second
      }
    }
  }

  let result = ''

  if (!!type && timeTypes.includes(type)) {
    let deleteTimeTypesIndex = timeTypes.indexOf(type) + 1
    if (isAutoUpwardConvert) {
      const unit = getUnitConversion(timeInfo, defaultTimeType, type)
      const time = Math.floor(second / unit)
      convertTime(time, timeTypes[deleteTimeTypesIndex], function(index) {
        deleteTimeTypesIndex = index + 1
      })
    }
    // 删除type后的time类型
    timeTypes.splice(deleteTimeTypesIndex)
  }

  convertTime(second, defaultTimeType, function(index, unit, conversionResult) {
    second -= conversionResult * unit
    result += conversionResult + timeInfo[timeTypes[index]].name
  })

  return result
}

formatTime(3601, 'mm')

function getUnitConversion(unitInfos, unit, convertedUnit) {
  const unitTypes = Object.keys(unitInfos)
  const unitIndex = unitTypes.indexOf(unit)
  const convertedUnitIndex = unitTypes.indexOf(convertedUnit)
  const unitNums = unitTypes
    .map(key => unitInfos[key].unit)
    .slice(unitIndex, convertedUnitIndex + 1)
  let result = 1

  result = unitIndex === convertedUnitIndex ?
    unitInfos[unitTypes[unitIndex]].unit :
    unitNums.reduce((prev, cur) => prev * cur, 1)

  return result
}
