const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAYS_PER_WEEK = 7;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MINUTES_PER_WEEK = MINUTES_PER_DAY * DAYS_PER_WEEK;
const daysOfWeek = {
							'0' : 'Sunday',
							'1' : 'Monday',
							'2' : 'Tuesday',
							'3' : 'Wednesday',
							'4' : 'Thursday',
							'5' : 'Friday',
							'6' : 'Saturday',
							};

function timeOfDay(offSetInMinutes) {

  let isRetracement = Math.sign(offSetInMinutes) === -1;
  let day;
  let hour;
  let minute;
  let momentOfDayInMinutes;
  offSetInMinutes = Math.abs(offSetInMinutes);
  let isSeveralDays = offSetInMinutes >= MINUTES_PER_DAY;
  day = daysOfWeek[getDayOfTheWeek(offSetInMinutes, isRetracement)];
  
  if (isSeveralDays) {
    offSetInMinutes = getIntradayOffSetInMinutes(offSetInMinutes);
  }
  
  momentOfDayInMinutes = isRetracement ? MINUTES_PER_DAY - offSetInMinutes : offSetInMinutes;
  hour = Math.floor(momentOfDayInMinutes / MINUTES_PER_HOUR);
  minute = Math.ceil(momentOfDayInMinutes % MINUTES_PER_HOUR);
  hour = 24 && 0 || hour; 

}

function getDayOfTheWeek(offSetInMinutes, isRetracement) {
  let offSetInDaysOfWeek = Math.ceil(  (offSetInMinutes % MINUTES_PER_WEEK) / MINUTES_PER_DAY);
  return isRetracement ? DAYS_PER_WEEK - offSetInDaysOfWeek : offSetInDaysOfWeek; 
  
}

function getIntradayOffSetInMinutes(offSetInMinutes) {
  return offSetInMinutes % MINUTES_PER_DAY;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-4231) === "23:57");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");