const DEGREE = '\xB0';
const FULL_ROTATION = 360;
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function normalizeDecimalDegrees(decimalDegrees) {

  let calculateTetha = () => {
    return ((decimalDegrees / FULL_ROTATION) - Math.floor(decimalDegrees / FULL_ROTATION)) * FULL_ROTATION; 
  }
  
  let sign = Math.sign(decimalDegrees);
  decimalDegrees = Math.abs(decimalDegrees);
  let tetha = calculateTetha();
  let normalizedDecimalDegrees;

  if (decimalDegrees >= FULL_ROTATION) {

    normalizedDecimalDegrees = sign > 0 ? tetha : (sign * tetha) - (sign * FULL_ROTATION);
    
  } else {

    normalizedDecimalDegrees = sign < 0 ? FULL_ROTATION - decimalDegrees : decimalDegrees;
  }

  return normalizedDecimalDegrees;

}

function dms(decimalDegrees) {

  decimalDegrees = normalizeDecimalDegrees(decimalDegrees);

  let degrees = Math.floor(decimalDegrees);
  let decimalMinutes = (decimalDegrees - degrees) * MINUTES_PER_DEGREE;
  let minutes = Math.floor(decimalMinutes);
  let seconds = (decimalMinutes - minutes) * SECONDS_PER_MINUTE;  
  let dms = `${degrees}${DEGREE}${minutes}'${seconds}"`;
  return dms;

}


console.log(dms(-1));   // Expected: "359°00'00\""  
console.log(dms(400));  // Expected: "40°00'00\""  
console.log(dms(-40));  // Expected: "320°00'00\""  
console.log(dms(-420)); // Expected: "300°00'00\""