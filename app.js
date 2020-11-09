/**
 * 
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const onesPlace = findOnesPlaceInt(num);
  const onesPlaceRoman = convertOnesToRoman(onesPlace);
  const tensPlace = findTensPlaceInt(num);
  const tensPlaceRoman = convertTensToRoman(tensPlace);
  const hundredsPlace = findHundredsPlaceInt(num);
  const hundredsPlaceRoman = convertHundredsToRoman(hundredsPlace);
  const thousandsPlace = findThousandsPlaceInt(num);
  const thousandsPlaceRoman = convertThousandsToRoman(thousandsPlace);

  return thousandsPlaceRoman + hundredsPlaceRoman + tensPlaceRoman + onesPlaceRoman;
};

// Find the number in the ones place given any number 
const findOnesPlaceInt = function(num) {
  const integer = num % 10;
  return integer; 
};

// Find the number in the tens place given any number
const findTensPlaceInt = function(num) {
  let integer = num % 100;
  integer = integer / 10;
  return Math.floor(integer);
};

// Find the number in the hundreds place given any number
const findHundredsPlaceInt = function(num) {
  let integer = num % 1000;
  integer = integer / 100;
  integer = Math.floor(integer);
  console.log(integer);
  return integer;
};

// Find the number in the thousands place given any number
const findThousandsPlaceInt = function(num) {
  let integer = num / 1000;
  integer = Math.floor(integer);
  console.log(integer);
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
  let romanNumeral = [];
  switch(num) {
    case 4:
      return romanNumeral = 'IV';
    case 9:
      return romanNumeral = 'IX';
    default: 
      if (num <= 3) {
        for (i = 1; i <= num; i++) {
          romanNumeral.push('I');
        }
      } else if (num >= 5 && num < 9) {
        romanNumeral.push('V');
        for (j = 6; j <= num; j++) {
          romanNumeral.push('I');
        }
      }
    return romanNumeral.join('');
  }
};

const convertTensToRoman = function(num) {
  let romanNumeral = [];
  switch(num) {
    case 4:
      return romanNumeral = 'XL';
    case 9: 
      return romanNumeral = 'XC';
    default: 
      if (num <= 3) {
        for (i = 1; i <= num; i++) {
          romanNumeral.push('X');
        }
      } else if (num >= 5 && num < 9) {
        romanNumeral.push('L');
        for (j = 6; j <= num; j++) {
          romanNumeral.push('X');
        }
      }
    return romanNumeral.join('');  
  } 
};

const convertHundredsToRoman = function(num) {
  let romanNumeral = [];
  switch(num) {
    case 4:
      return romanNumeral = 'CD';
    case 9: 
      return romanNumeral = 'CM';
    default: 
      if (num <= 3) {
        for (i = 1; i <= num; i++) {
          romanNumeral.push('C');
        }
      } else if (num >= 5 && num < 9) {
        romanNumeral.push('D');
        for (j = 6; j <= num; j++) {
          romanNumeral.push('C');
        }
      }
    return romanNumeral.join('');  
  } 
};

const convertThousandsToRoman = function(num) {
  let romanNumeral = [];
  switch(num) {
    default: 
      if (num <= 3) {
        for (i = 1; i <= num; i++) {
          romanNumeral.push('M');
        }
      } 
    return romanNumeral.join('');   
  } 

};

console.log(`${intToRoman(2838)}`);