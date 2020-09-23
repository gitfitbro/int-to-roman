// Return the digit in the ones place of an integer
function getOnesDigit(num) {
  return num % 10;
}

// Return the digit in the tens place of an integer
function getTensDigit(num) {
  num %= 100;
  return Math.floor(num / 10);
}

// Return the digit in the hundreds place of an integer
function getHundredsDigit(num) {
  num %= 1000;
  return Math.floor(num / 100);
}

// Return the digit in the thousands place of an integer
function getThousandsDigit(num) {
  return Math.floor(num / 1000);
}

// Convert a digit located in the ones place of an integer
// to the equivalent roman numeral
function convertOnesDigitToRoman(digit) {
  // Convert 9 to IX
  if (digit === 9) return 'IX';

  // Convert 4 to IV
  if (digit === 4) return 'IV';

  let romanNumeral = '';

  // Convert 5 to V
  if (digit >= 5) {
    romanNumeral += 'V';
    digit -= 5;
  }

  // Convert 1s to I
  while (digit-- > 0) {
    romanNumeral += 'I';
  }

  return romanNumeral;
}

// Convert a digit located in the tens place of an integer
// to the equivalent roman numeral
function convertTensDigitToRoman(digit) {
  // Convert 90 to XC
  if (digit === 9) return 'XC';

  // Convert 40 to XL
  if (digit === 4) return 'XL';

  let romanNumeral = '';

  // Convert 50 to L
  while (digit >= 5) {
    romanNumeral += 'L';
    digit -= 5;
  }

  // Convert 10s to X
  while (digit-- > 0) {
    romanNumeral += 'X';  
  }

  return romanNumeral;
}

// Convert a digit located in the hundreds place of an integer
// to the equivalent roman numeral
function convertHundredsDigitToRoman(digit) {
  // Convert 900 to CM
  if (digit === 9) return 'CM';

  // Convert 400 to CD
  if (digit === 4) return 'CD';

  let romanNumeral = '';

  // Convert 500 to D
  while (digit >= 5) {
    romanNumeral += 'D';
    digit -= 5;
  }

  // Convert 100s to C
  while (digit-- > 0) {
    romanNumeral += 'C';
  }

  return romanNumeral;
}

// Convert a digit located in the thousands place of an integer
// to the equivalent roman numeral
// This function is only designed to work with integers that
// have a maximum value of 3 in the thousands place
function convertThousandsDigitToRoman(digit) {
  let romanNumeral = '';
  
  // Convert thousands to M  
  while (digit-- > 0) {
    romanNumeral += 'M'
  }

  return romanNumeral;
}

/**
 * 
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  const onesDigit = getOnesDigit(num);
  const tensDigit = getTensDigit(num);
  const hundredsDigit = getHundredsDigit(num);
  const thousandsDigit = getThousandsDigit(num);
  
  const onesRoman = convertOnesDigitToRoman(onesDigit);
  const tensRoman = convertTensDigitToRoman(tensDigit);
  const hundredsRoman = convertHundredsDigitToRoman(hundredsDigit);
  const thousandsRoman = convertThousandsDigitToRoman(thousandsDigit);

  const romanNumeral = thousandsRoman + hundredsRoman + tensRoman + onesRoman;

  return romanNumeral;
};

const integerInput = document.querySelector('#integer');
integerInput.addEventListener('change', e => {
  const integer = Math.trunc(e.target.value);
  const romanNumeral = intToRoman(integer);
  const romanNumeralDisplay = document.querySelector('#roman-numeral');
  integerInput.value = integer;
  romanNumeralDisplay.innerText = romanNumeral;
});