/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
const exclusiveTime = (n, logs) => {
  // 函数运行结果
  const result = new Array(n).fill(0)
  // 保存函数调用子函数的运行时间
  const sum = new Array(n).fill(0)
  // 存储函数调用栈信息
  const stack = []

  logs.forEach(log => {
    // 取出当前函数调用信息
    const [ id, type, time ] = log.split(':').map(item => /\d+/.test(item) ? Number(item) : item)

    if (type === 'start') {
      // 函数开始运行，加入调用栈，存储函数信息
      stack.unshift({ id, time })
    } else {
      // 当前函数运行结束，取出调用栈信息
      const { id: funcId, time: startTime } = stack.shift()
      // 函数运行总时长
      const duraction = time - startTime + 1
      // 函数运行时间 = 函数运行总时长 - 子函数运行时长
      result[funcId] += duraction - sum[funcId]
      sum[funcId] = 0

      if (stack.length > 0) {
        sum[stack[0].id] += duraction
      }
    }
  })

  return result
};

exclusiveTime(1, ["0:start:0","0:start:1","0:start:2","0:end:3","0:end:4","0:end:5"])