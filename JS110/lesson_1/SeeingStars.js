const TOKEN = '*';
const SPACE = ' ';

function initializeGrid(n) {
  let grid = [];
  for (let i = 0; i < n; i += 1) {
    grid.push(new Array(n).fill(' '));
  }
  return grid;
}

function star(n) {

  let grid = initializeGrid(n);
  let middle = Math.floor(n / 2);
  let offSet = 0;
  
  for (let y = 0; y < n; y += 1) {
  for (let x = offSet; x <= (middle * 2) - offSet; x += 1) {
    grid[y][x] = (x === offSet) || 
    (x === (middle * 2) - offSet) ||
    (x === middle) ?
    TOKEN : SPACE;
    if (y === middle) {
      grid[y] = Array(n).fill(TOKEN);
      offSet = middle;
    }
}
    let line = grid[y].reduce((line, element) => line.concat(element), '');
    console.log(line);
    offSet += y < middle ? 1 : -1;
  }
}

star(9); 
console.log();
star(7);
