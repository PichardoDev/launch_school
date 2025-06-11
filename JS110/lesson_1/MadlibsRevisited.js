let getPlaceHolder = (word) => `*${word}*`;
let getRandomWordOfType = (word) => {
  return words[word][rand]
};

const words = {
  noun: ["tree", "river", "mountain", "car", "child", "book", "window", "cake"],
  verb: ["run", "jump", "sing", "drive", "cook", "write", "paint", "climb"],
  adjective: ["bright", "huge", "delicious", "quiet", "ancient", "friendly", "brave", "soft"],
  adverb: ["quickly", "silently", "happily", "gently", "loudly", "bravely", "eagerly", "sadly"]
};

function performWordSelection(str) {
  Object.keys(words).forEach(wordType => {
    if (str.includes(getPlaceHolder(wordType))) {
      let randomWordIndex = Math.floor(Math.random() * words[wordType].length);
      let replacementWord = words[wordType][randomWordIndex];
      str = str.replace(getPlaceHolder(wordType), replacementWord);
    }
  })
  return str;
}
 
function madlibs (template) {
  return template.split(' ')
    .map(word => performWordSelection(word))
    .join(' ');
}

let template1 = 'The *adjective* *noun* *verb* *adverb* all night without his *adjective* *noun*, that always *verb* all night long'

let template2 = 'The *adjective* brown *noun* *adverb* *verb* the *adjective* yellow *noun*, who *adverb* *noun* his *noun* and looks around.'


console.log(madlibs(template1));
