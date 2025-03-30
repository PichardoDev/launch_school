function howMany(array) {

  let occurrences = {};

  array.forEach(element => {
    let existingVersion = ((occurrences[element.toLowerCase()] && element.toLowerCase())  
                          || (occurrences[element.toUpperCase()] && element.toUpperCase())) 
                          || element;
    occurrences[existingVersion] = occurrences[existingVersion] || 0;
    occurrences[existingVersion] += 1;
  });
  return occurrences;
}



function howMany(array) {
  let occurrences = {};
  let lowerCaseMap = {};

  array.forEach(element => {
    let lowerCase = element.toLowerCase();
    
    if (lowerCaseMap[lowerCase]) {
      occurrences[lowerCaseMap[lowerCase]] += 1;
    } else {
      lowerCaseMap[lowerCase] = element;
      occurrences[element] = 1;
    }
  });

  return occurrences;
}


console.log(howMany(['PICKUP','CAR',, 'car', ' ', 'car','suv', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'suv', 'motorcycle', 'car', 'truck', 'CAR']));

 