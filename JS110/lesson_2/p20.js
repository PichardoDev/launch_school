const MAX_DIGIT = 9;
const MIN_CODE_POINT = 97;
const MAX_CODE_POINT = 122;

function generateUUID() {
  let id = ''; 
  let charToAdd = ''
  for (let i = 0; i < 32; i += 1) {
    switch (determineCharCategory()) {
      case 0:
        charToAdd = generateDigit();
        break;
      case 1:
        charToAdd = generateLetter();
        break;
    }
    id = id.concat(charToAdd);
  }

  return id.replace(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/, "$1-$2-$3-$4-$5"); 
}

function determineCharCategory() {
  return Math.round(Math.random());
}

function generateDigit() {
  return Math.round(Math.random() * MAX_DIGIT);  
}

function generateLetter() {
  return String.fromCharCode(Math.round(Math.random() * (MAX_CODE_POINT - MIN_CODE_POINT)) + MIN_CODE_POINT);
}


console.log(generateUUID());