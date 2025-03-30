function interleave(array1, array2) {

  
  let interleaved = array1.map((element1, idx) => {
    
    let elements = [element1, array2[idx]];
    return elements;
    
  }, []);

  return interleaved.flat();
  
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    
 // [1, "a", 2, "b", 3, "c"]);