function prompt(message) {
  console.log('=> ' + message);
}

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
arr2[2] = 0;
console.log(arr1);


