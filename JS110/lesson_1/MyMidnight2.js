const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function beforeMidnight(time) {

  let minute = MINUTES_IN_DAY - time.split(':')
                                .reduce((accum, num, idx) => {
                                  num = parseInt(num);
                                  return accum + ((!idx && num * 60) || num);
                                }, 0);
                                  console.log(minute);
  return minute % MINUTES_IN_DAY ;
}
function afterMidnight(time) {
  let minute = time.split(':')
               .reduce((accum, num, idx) => {
               num = parseInt(num);
               return accum + ((!idx && num * 60) || num);
               }, 0);
  console.log(minute);
  return minute % MINUTES_IN_DAY;
  
}
console.log(`00:00 after / ${afterMidnight("00:00")} ? 0 : ${afterMidnight("00:00") === 0 ? "true" : "false"}`);  
console.log(`00:00 before / ${beforeMidnight("00:00")} ? 0 : ${beforeMidnight("00:00") === 0 ? "true" : "false"}`);  
console.log(`12:34 after / ${afterMidnight("12:34")} ? 754 : ${afterMidnight("12:34") === 754 ? "true" : "false"}`);  
console.log(`12:34 before / ${beforeMidnight("12:34")} ? 686 : ${beforeMidnight("12:34") === 686 ? "true" : "false"}`);  
console.log(`24:00 after / ${afterMidnight("24:00")} ? 0 : ${afterMidnight("24:00") === 0 ? "true" : "false"}`);  
console.log(`24:00 before / ${beforeMidnight("24:00")} ? 0 : ${beforeMidnight("24:00") === 0 ? "true" : "false"}`);