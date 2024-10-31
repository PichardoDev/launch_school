function prompt(message) {
  console.log('=> ' + message);
}

let munstersDescription = "The Munsters are creepy and spooky.";

const swap = (text) => {
  return text.split('').map(char => {
    if (char >= 'A' && char <= 'Z') {
      return char.toLowerCase();
    } else if (char >= 'a' && char <= 'z') {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}
let swapped = swap(munstersDescription);
prompt(swapped);
