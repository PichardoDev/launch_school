function range(start, end = -1) {
  if (start !== 0 && end === -1) {
    [start, end] = [0, start];
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));