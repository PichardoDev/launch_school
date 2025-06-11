const blocks = {};

function initializeBlocks(blocks) {
  const blockKeys = [
    "B:O", "X:K", "D:Q", "C:P", "N:A", "G:T",
    "R:E", "F:S", "J:W", "H:U", "V:I", "L:Y", "Z:M"
  ];
  for (const key of blockKeys) {
    blocks[key] = true;
  }
}

function isBlockAvailable(block) {
  if (blocks[block]) {
    blocks[block] = !blocks[block];
    return true;
  } else {
    return false
  }
}

function selectBlock(letter) {
  return Object.keys(blocks).filter(block => block.includes(letter))[0];
}

function isBlockWord(word) {
initializeBlocks(blocks);   
return word.split('').every(letter => isBlockAvailable(selectBlock(letter.toUpperCase()))); 
}  

console.log('BATCH', isBlockWord('BATCH') === true);
console.log('BUTCH', isBlockWord('BUTCH') === false);
console.log('jest', isBlockWord('jest') === true);
console.log('TANGO', isBlockWord('TANGO') === false);
console.log('READ', isBlockWord('READ') === false);
console.log('BOOK', isBlockWord('BOOK') === false);
console.log('QUIZ', isBlockWord('QUIZ') === true);
console.log('FRONT', isBlockWord('FRONT') === true);
console.log('CAMP', isBlockWord('CAMP') === false);
console.log('JUMP', isBlockWord('JUMP') === true);
console.log('LAMPS', isBlockWord('LAMPS') === true);
console.log('DOVE', isBlockWord('DOVE') === true);
console.log('SNAKE', isBlockWord('SNAKE') === false);
console.log('table', isBlockWord('table') === true);
console.log('scoop', isBlockWord('scoop') === false);
console.log('quiet', isBlockWord('quiet') === true);
console.log('vine', isBlockWord('vine') === false);
console.log('frost', isBlockWord('frost') === false);
console.log('lamp', isBlockWord('lamp') === true);
console.log('Jack', isBlockWord('Jack') === true);
console.log('plum', isBlockWord('plum') === true);
console.log('Quiz', isBlockWord('Quiz') === true);
console.log('grain', isBlockWord('grain') === false);