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


console.log(JSON.stringify(merge([1, 5, 9], [2, 6, 8])) === JSON.stringify([1, 2, 5, 6, 8, 9]));
console.log(JSON.stringify(merge([1, 1, 3], [2, 2])) === JSON.stringify([1, 1, 2, 2, 3]));
console.log(JSON.stringify(merge([], [1, 4, 5])) === JSON.stringify([1, 4, 5]));
console.log(JSON.stringify(merge([1, 4, 5], [])) === JSON.stringify([1, 4, 5]));
console.log(JSON.stringify(merge([1, 2, 3], [4, 5, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]));
console.log(JSON.stringify(merge([0, 2], [3, 7])) === JSON.stringify([0, 2, 3, 7]));
console.log(JSON.stringify(merge([2, 4, 6, 8], [1, 3, 5, 7])) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(JSON.stringify(merge([100], [1, 2, 3, 99])) === JSON.stringify([1, 2, 3, 99, 100]));
console.log(JSON.stringify(merge([], [])) === JSON.stringify([]));
console.log(JSON.stringify(merge([0, 0, 0], [0, 0, 0])) === JSON.stringify([0, 0, 0, 0, 0, 0]));
console.log(JSON.stringify(merge([1, 3, 5], [2, 4, 6, 8, 10])) === JSON.stringify([1, 2, 3, 4, 5, 6, 8, 10]));
console.log(JSON.stringify(merge([5, 6, 7], [1, 2, 3, 4])) === JSON.stringify([1, 2, 3, 4, 5, 6, 7]));