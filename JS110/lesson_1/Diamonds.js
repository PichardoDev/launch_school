function diamond(n) {
  let grid = initializeGrid(n);
  let offSet = 0;
  let middle = Math.floor(n / 2);
  for (let y = 0; y < n; y += 1) {
    for (let x = middle - offSet; x <= middle + offSet; x += 1) {
      grid[y][x] = x === middle - offSet 
        || x === middle + offSet ? '*' : ' ';
    }
    let line = grid[y].reduce((line, element) => line.concat(element), '');
    console.log(line);
    offSet += y < middle ? 1 : -1;
  }
}

function initializeGrid(n) {
  let grid = [];
  for (let i = 0; i < n; i += 1) {
    grid.push(new Array(n).fill(' '));
  }
  return grid;
}

diamond(41);
