function reverse(array) {
  let helper = [];

  while (array.length > 0) {
    helper.push(array.pop());
  }
  while (helper.length > 0) {
    array.push(helper.shift());
}

return array;
}

console.log(reverse([1, 2, 3, 4]));