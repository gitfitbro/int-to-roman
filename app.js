const intToRoman = function(number) {
  //accepts nums 1 --> 3999
  //pass in 1000 for digits value & empty string to start
  return recursivelyGenerateRomans(1000, number, '');
};

//Starts with higher digit placeholders and calls itself recursively, moving to next largest placeholder
function recursivelyGenerateRomans(placeholderValue, number, romanString) {
  
  const divisor = determineIfHalfOrWholeDigit(placeholderValue); //ie 1000 or 500
  const placeholderValueHalf = placeholderValue / divisor;
  const placeholderValueNextWhole = 
    divisor === 2 ?
      placeholderValue / 10 :
      placeholderValueHalf;

  //find number of whole placeholders in current number 
  //then update string & subtract from number 
  const placeholdersWhole = Math.floor(number / placeholderValue);
  romanString = buildUpString(placeholderValue, romanString, placeholdersWhole); 
  number -= placeholdersWhole * placeholderValue;

  //find remainder of above divison 
  const placeholdersRemainder = placeholderValue - number;
  //case: number is less than placeholder by value of next placeholder ... NO HALVES!
  //      will buildString with subtractive method
  if (placeholdersRemainder <= placeholderValueNextWhole) {
    romanString = buildUpString(placeholderValueNextWhole, romanString);
    romanString = buildUpString(placeholderValue, romanString);
    number -= placeholderValue - placeholderValueNextWhole;
  }
  
  //call recursively with next value or return final answer
  if (placeholderValue > 1) {
    return recursivelyGenerateRomans(placeholderValueHalf, number, romanString);
  }
  else {
    return romanString;
  }
}

function determineIfHalfOrWholeDigit(placeholderValue) {
  //determine if placeholderValue is whole or half digits (1000 vs 500) 
  //and return correct divisor (used to generate the correct placeholderHalf)
  while (placeholderValue >= 10) {
    placeholderValue = placeholderValue / 10;
  }
  return placeholderValue === 1 ? 2 : 5;
}

//concactenates the specified number of Roman Numeral Character onto string
//if no quantity argument passed in, will add only one character
function buildUpString(placeholderValue, numAsString, placeholderQuantity = 1) {
  //switch placeholders array index to correct Roman Numeral
  let romanChar;
  switch(placeholderValue) {
    case 1000: 
      romanChar = 'M';
      break;
    case 500:
      romanChar = 'D';
      break;
    case 100: 
      romanChar = 'C';
      break;
    case 50:
      romanChar = 'L';
      break;
    case 10: 
      romanChar = 'X';
      break;
    case 5: 
      romanChar = 'V';
      break;
    case 1: 
      romanChar = 'I';
      break;
    default: 
      romanChar = 'Z';
      break;
  }
  //append the correct Roman Numeral the specified number of times
  for (let i = 0; i < placeholderQuantity; i++) {
    numAsString += romanChar;
  }
  return numAsString;
}

console.log(intToRoman(39));
console.log(intToRoman(49));
console.log(intToRoman(3925));