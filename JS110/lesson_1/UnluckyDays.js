const FRIDAYS_DAY_OF_WEEK_NUMBER = 5;
const DAY = 13;

function fridayThe13ths(year) {
  year = String(year);
  let count = 0;
  for (let month = 0; month <= 12; month += 1) {
    let date = new Date(year, month, DAY);
    let dayOfWeek = date.getDay();

    if (dayOfWeek === FRIDAYS_DAY_OF_WEEK_NUMBER) count += 1; 
  }

  return count;
}



console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2