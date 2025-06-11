function bubbleSort(arr) {
  
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i += 1) {    
      if (arr[i + 1] < arr[i]) {
        [current, next] = [arr[i + 1], arr[i]];
        [arr[i], arr[i + 1]] = [current, next];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(JSON.stringify(array1) === JSON.stringify([3, 5]));

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(JSON.stringify(array2) === JSON.stringify([1, 2, 4, 6, 7]));

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(JSON.stringify(array3) === JSON.stringify(["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]));