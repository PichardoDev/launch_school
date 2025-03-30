function multiplyList(array1, array2) {

  return array1.reduce((resultingArray, element1, idx) => {
    let element2 = array2[idx];
    return resultingArray.concat(element1 * element2); 
  }, [])

}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]