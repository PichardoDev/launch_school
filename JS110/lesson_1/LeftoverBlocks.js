
function calculateLeftoverBlocks(blocksProvided) {

  let blocksLeft = blocksProvided;
  let structure = [];
  
  while (isValidLayer(structure, blocksLeft)) {

    structure.push(createLayer(structure));
    let blocksUsed = structure[structure.length - 1].length;
    blocksLeft = blocksLeft - blocksUsed;
    
  }
  return blocksLeft;

}

function isValidLayer(structure, blocksLeft) {

  if (blocksLeft <= 0) return false;

  if (blocksLeft >= (structure.length + 1) ** 2) {
    return true;
  } else {
    return false;
  }

}

function createLayer(structure) {

  let layer = [];

  while (layer.length < (structure.length + 1) ** 2) {
    layer.push("x");
  }

  return layer;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true*/