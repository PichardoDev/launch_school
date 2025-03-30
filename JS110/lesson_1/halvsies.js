function halvsies(original) {

  if (original.length > 1) {
    return generateCopiedSubarrays(original);
  } else {
    return generateAutofilledSubarrays(original);
  }


}

function generateAutofilledSubarrays(original) {
  
  let autoFilledSubarrays = [];
  
  autoFilledSubarrays.push((original.length > 0 ? original[0] : []), []);
  
  return autoFilledSubarrays;
}

function generateCopiedSubarrays(original) {

  let copiedSubarrays = [];
  let firstSubarray = [];
  let secondSubarray = [];

  firstSubarray = original.slice(0, Math.ceil(original.length / 2));
  secondSubarray = original.slice(Math.ceil(original.length / 2), original.length);
  copiedSubarrays.push(firstSubarray, secondSubarray);
  
  return copiedSubarrays;
}

  /* function halvsies(arr) {
    const middleIndex = Math.ceil(arr.length / 2);
    return [arr.slice(0, middleIndex), arr.slice(middleIndex)];
  } */

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]  
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]  
console.log(halvsies([5]));                // [[5], []]  
console.log(halvsies([]));                 // [[], []]