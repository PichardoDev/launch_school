let readline = require('readline-sync');
function getOffSet(arr) {
  let half = Math.floor(arr.length / 2);
  return arr.length - half;
}

function binarySearch(array, token) {
  let arr = [...array];
  let outterIndex = getOffSet(array);
  let innerIndex;

  while (true) {
    let middle = array[outterIndex];
    if (token === middle) return outterIndex;
    if (arr.length === 1) {
      return -1;
    } else {
      if (token > middle) {
        arr = arr.slice(getOffSet(arr));
        outterIndex += getOffSet(arr);
      } else {
        arr = arr.slice(0, getOffSet(arr));
        outterIndex -= getOffSet(arr);
        }
    }
  }
  return currentIndex;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Zooper') === 9);
/* console.log(binarySearch(yellowPages, 'Apple Store') === 0);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5) === 1);
console.log(binarySearch(yellowPages, 'Pizzeria') === 7);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter') === -1);
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler') === 6); */