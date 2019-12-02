/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const checkIsLeapYear = year => !(year % 4) && !!(year % 100) || !(year % 400);
var dayOfTheWeek = function(day, month, year) {
  const oneWeekDays = 7;
  const startYear = 1971;
  const startMonth = 0;
  const baseDay = new Date(startYear, startMonth, 1).getDay();
  const isLeapYear = checkIsLeapYear(year);
  const dayTexts = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const oneMonthDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const yearDays = (() => {
    let days = 0;
    for (let i = startYear; i < year; i++) {
      days += checkIsLeapYear(i) ? 366 : 365;
    }
    return days
  })()
  const monthDays = (() => {
    let days = 0;
    for (let i = startMonth; i < month - 1; i++) {
      days += oneMonthDays[i]
    }
    return days
  })()

  const totalDays = yearDays + monthDays + day;
  const remainder = (totalDays - 1) % oneWeekDays
  return dayTexts[(baseDay + remainder) % oneWeekDays]
};
