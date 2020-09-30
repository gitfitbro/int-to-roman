//array of descending digit placeholders 
const placeholders = [
  1000,
  500,
  100,
  50,
  10,
  5,
  1
];
 
const intToRoman = function(num) {
  //accepts nums 1 --> 3999
  let numAsString = '';

  // '0' argument represents placeholders[0], the thousands place:
  numAsString = recursivelyGenerateRomans(0, num, numAsString);
  return numAsString;
};

//Starts with higher digit placeholders and calls itself recursively, moving to next largest placeholder
//Example Arguments: (<0 -> 6>, numToBeConverted, '')
function recursivelyGenerateRomans(placeholderIndex, number, romanString) {
  
  //set up real values for indexes: 0 = 1000, 1 = 500, 2 = 100, and so on
  const placeholderValue = placeholders[placeholderIndex];
  const placeholderValueNext = placeholders[placeholderIndex + 2];
  const placeholderValueHalf = placeholders[placeholderIndex + 1];

  //find number of whole placeholders in current number 
  //update string & subtract from number 
  const placeholdersWhole = Math.floor(number / placeholderValue);
  romanString = buildUpString(placeholderIndex, romanString, placeholdersWhole); 
  number -= placeholdersWhole * placeholderValue;


  //check to apply subtractive method (eg, 9 = IX) if number is close enough
  const placeholdersRemainder = placeholderValue - number;

  // case: number is less than placeholder by value of next placeholder
  if (placeholdersRemainder <= placeholderValueNext) {
    //buildString with subtractive method:
    romanString = buildUpString(placeholderIndex + 2, romanString);
    romanString = buildUpString(placeholderIndex, romanString);
    number = number - (placeholderValue - placeholderValueNext);
  }
  // case: number is not close enough
  else {
    //check for Half Placeholder (500, 50) -- no need to divide, only 1 at most
    const numIsMoreThanNextPlaceholderWhole = number >= placeholderValueHalf;

    if (numIsMoreThanNextPlaceholderWhole) {

      romanString = buildUpString(placeholderIndex + 1, romanString);
      number -= placeholderValueHalf;
    }
    else {
      //check to apply subtractive method (eg, 9 = IX) if number is close enough
      //if not, will just continue on to next recursion
      const nextPlaceholderRemainder = placeholderValueHalf - number;

      if (nextPlaceholderRemainder <= placeholderValueNext) {
        //buildString with subtractive method:
        romanString = buildUpString(placeholderIndex + 2, romanString);
        romanString = buildUpString(placeholderIndex + 1, romanString);
        number = number - (placeholderValue - placeholderValueNext);
      }  
    }
  }

  //check if at Ones index -- end & return 
  //else call again recursively with Placeholder Index set to next tens place (eg, 100 -> 10)
  if (placeholderIndex >= 6) {
    return romanString;
  }
  else {
    placeholderIndex += 2;
    return recursivelyGenerateRomans(placeholderIndex, number, romanString);
  }
}

//concactenates the specified number of Roman Numeral Character onto string
//if no quantity argument passed in, will add only one character
function buildUpString(placeholderIndex, numAsString, placeholderQuantity = 1) {
  //switch placeholders array index to correct Roman Numeral
  let romanChar;
  switch(placeholderIndex) {
    case 0: 
      romanChar = 'M';
      break;
    case 1:
      romanChar = 'D';
      break;
    case 2: 
      romanChar = 'C';
      break;
    case 3:
      romanChar = 'L';
      break;
    case 4: 
      romanChar = 'X';
      break;
    case 5: 
      romanChar = 'V';
      break;
    case 6: 
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
console.log(intToRoman(193));
console.log(intToRoman(3025));