const UPPER_CASE_LOWER_RANGE = 65;  // 'A'
const UPPER_CASE_UPPER_RANGE = 90;  // 'Z'
const LOWER_CASE_LOWER_RANGE = 97;  // 'a'
const LOWER_CASE_UPPER_RANGE = 122; // 'z'

const PERCENTAGES = {
  lowercase : '',
  uppercase : '',
  neither : '',
}

function calculatePercentages(characters, uppercase, lowercase, others) {
  let totalCharacters = characters.length;
  PERCENTAGES.uppercase = ((uppercase.length * 100) / totalCharacters).toFixed(2);
  PERCENTAGES.lowercase = ((lowercase.length * 100) / totalCharacters).toFixed(2);
  PERCENTAGES.neither = ((others.length * 100) / totalCharacters).toFixed(2);
}

function letterPercentages(string) {

  let characters = string.split('');
  let uppercase = [];
  let lowercase = [];
  let others = [];

  characters.forEach(char => {
    if (char.charCodeAt() >= UPPER_CASE_LOWER_RANGE && char.charCodeAt() <= UPPER_CASE_UPPER_RANGE) {
      uppercase.push(char);
    } else if (char.charCodeAt() >= LOWER_CASE_LOWER_RANGE && char.charCodeAt() <= LOWER_CASE_UPPER_RANGE) {
      lowercase.push(char);
    } else {
      others.push(char); 
    }
  });

  calculatePercentages(characters, uppercase, lowercase, others);

  return PERCENTAGES;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
