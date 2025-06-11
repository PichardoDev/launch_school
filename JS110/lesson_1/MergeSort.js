function merge(arr1, arr2) {
  let mergedArr = [];
  let idx1 = 0;
  let idx2 = 0;
  
  while (idx1 < arr1.length || idx2 < arr2.length) {
    if (arr2[idx2] <= arr1[idx1] || idx1 >= arr1.length) {
        mergedArr.push(arr2[idx2]);
        idx2 += 1;
    } else {
        mergedArr.push(arr1[idx1]);
        idx1 += 1;
    }
  }
  return mergedArr;
}

function getArrayHalves(arr) {
  let halfIndex = (Math.floor(arr.length / 2));
  return [arr.slice(0, halfIndex), arr.slice(halfIndex)];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

    let [half1, half2] = getArrayHalves(arr); 
    return merge(mergeSort(half1), mergeSort(half2));
}

console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     
console.log(mergeSort([6, 2, 7, 1, 4]));            
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]));   

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));