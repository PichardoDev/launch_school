function lightsOn(switches) {

  let rowSwitches = {};
  let passes = 0;
  let step = 1;

  while (passes < switches) {
    for (let pos = step; pos <= switches; pos += step) {
      rowSwitches[pos] = !rowSwitches[pos]; 
    }

    passes += 1;
    step += 1;

  }

  return Object.keys(rowSwitches)
  .filter(switchNumber => rowSwitches[switchNumber])
  .map(element => Number(element));
}

console.log(JSON.stringify(lightsOn(5)) === JSON.stringify([1, 4]));
console.log(JSON.stringify(lightsOn(100)) === JSON.stringify([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]));