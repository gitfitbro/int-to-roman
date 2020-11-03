/**
 * 
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const onesPlace = findOnesPlaceInt(num);
  const onesPlaceRoman = convertOnesToRoman(onesPlace);
};

// Find the number in the ones place given any number 
const findOnesPlaceInt = function(num) {
  const integer = num % 10;
  return integer; 
};

const convertOnesToRoman = function(num) {
/*
 // TODO: return Roman numeral 4
    if (num === 4) {
        return 'IV';
    }
 // TODO: return Roman numeral 9 
    if (num === 9) {
        return 'IX';
    }
*/
    let romanNumeral = '';
    switch(num) {
      case 4:
        romanNumeral = 'IV';
        break;
      case 9: 
        romanNumeral = 'IX';
        break;
      default: 
        romanNumeral = 'Coming Soon';
    }
}

console.log(`${findOnesPlaceInt(8002)}`);
