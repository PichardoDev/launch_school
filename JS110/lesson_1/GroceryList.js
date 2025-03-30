function buyFruit(itemsAndQty) {
  return itemsAndQty.reduce((accum, itemAndQty) => {
    for(let idx = 0; idx < itemAndQty[1]; idx += 1) {
      accum = accum.concat(itemAndQty[0]);
    }
    return accum;
  }, []); 
}

function buyFruit(itemsAndQty) {
  return itemsAndQty.map(itemAndQty => {
    let arr = [];
    for(let idx = 0; idx < itemAndQty[1]; idx += 1) {
      arr.push(itemAndQty[0]);   
    }
    return arr;
  }).flat();
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));  
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
