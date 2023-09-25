////// Ex1.1 - Yes or No //////
/* function BoolToString(bool){
    if(bool == 1){
        return "true";
    }
    if(bool == 0){
       return "false";
    }
}
let t = true
let f = false

console.log(BoolToString(t)) */


////// Ex2.1 - Sum of lowest numbers //////
/* function Sumnum(arr) {
    arr.sort((a, b) => a - b);
    const sum = arr[0] + arr[1];
    return sum
  }
  const arr = [19, 5, 42, 2, 77];
  console.log(Sumnum(arr1)); 
  */

////// Ex2.3 - Find the Next Perfect Square  //////
 /* function findNextSquare(num) {
    if (Math.sqrt(num) % 1 === 0) {
      return Math.pow(Math.sqrt(num) + 1, 2);
    } else {
      return -1;
    }
  }
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
*/


////// Ex2.4 - Unique  //////
/* function findUniq(arr) {
   for(i=0; i < arr.length; i++)
   if(arr[i] != arr[i+1])
   return arr[i+1]
  }
  console.log(findUniq([1, 1, 1, 2, 1, 1]));
  console.log(findUniq([0, 0, 0.55, 0, 0]));
  */
  
////// Ex2.5 - Summation  //////
/* function sum(num){
    let sum = 0;
for(i=0; i<=num; i++){
 sum += i;
}
return sum 
}
console.log(sum(5))
*/

////// Ex2.6 - Years and Centuries  //////
/*
function cenFromYear(year) {
  const century = Math.ceil(year / 100);
  return century;
}
console.log(cenFromYear(1705)); 
console.log(cenFromYear(1900)); 
console.log(cenFromYear(1601)); 
console.log(cenFromYear(2000)); 
*/

////// Ex2.7 - Basic Math  //////
/* function mathcal(cal, val1, val2) {
  switch (cal) {
    case '+':
      return val1 + val2;
    case '-':
      return val1 - val2;
    case '*':
      return val1 * val2;
    case '/':
      return val1 / val2;
    default:
      return "Invalid operation";
  }
}
console.log(mathcal('+', 4, 7)); 
console.log(mathcal('-', 15, 18)); 
console.log(mathcal('*', 5, 5));   
console.log(mathcal('/', 49, 7));  
*/

////// Ex4.1 - Fibonacci   //////
/* function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(10)); 
*/

////// Ex5.1 - trimming string   //////
/* function removeFnL(strremover) {
  if (strremover.length >= 2) {
    return strremover.slice(1, -1);
  } else {
    return strremover;
  }
}

const string = "hello wasim";
const updatedstring = removeFnL(string);
console.log(updatedstring); 
*/


////// Ex5.2 - String Repeat   //////
/*
function repeatStr(countstr, rpt) {
  return rpt.repeat(countstr);
}
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello")); 
*/

////// Ex5.3 - To Camel Case   //////
/* function toCamelCase(str) {
  const remStr = str.split(/[-_]/);
  for (let i = 1; i < remStr.length; i++) {
    remStr[i] = remStr[i][0].toUpperCase() + remStr[i].slice(1);
  }
  return remStr.join('');
}

console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 
*/


////// Ex5.5 - Abbreviate two words   //////
/* function initials(name) {
  const namesplit = name.split(' ');
  const fname = namesplit[0][0].toUpperCase();
  const lname = namesplit[1][0].toUpperCase();
  return `${fname}.${lname}`;
}
console.log(initials("Sam Harris"));
console.log(initials("Patrick Feeney"));
*/

////// Ex5.6 - Mask   //////
/*
function maskify(str) {
  if (str.length <= 4) {
    return str;
  }
  const lastfour = str.slice(-4);
  const maskedstr = '#'.repeat(str.length - 4);
  return maskedstr + lastfour;
}
console.log(maskify("4556364607935616"));  
console.log(maskify("64607935616"));  
console.log(maskify("1"));  
console.log(maskify("Skippy"));  
console.log(maskify("Nananananananananananananananana Batman!"));*/

////// Ex5.7 - shortest words   //////
/*
function findShort(str) {
  const words = str.split(' ');
  let shortestLength = '';
  words.forEach(word => {
    if (shortestLength == '' || word.length < shortestLength.length) {
      shortestLength = word;
    }
  });

  return shortestLength.length;
}

 
console.log(findShort("The Appleseed"));  
*/

////// Ex6.1 - Mumbling   //////
/*
function accum(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    }

    if (i < str.length - 1) {
      result += "-";
    }
  }

  return result;
}
console.log(accum("abcd"));      
console.log(accum("RqaEzty"));  
console.log(accum("cwAt"));     
*/


////// Ex6.2 - Counting Duplicates    //////
/*
function countDuplicates(input) {
  const charCount = {};
  let duplicateCount = 0;
  input = input.toLowerCase();
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const isnumeric = (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9');
    if (isnumeric) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }
  for (let char in charCount) {
    if (charCount[char] > 1) {
      duplicateCount++;
    }
  }
  return duplicateCount;
}
console.log(countDuplicates("abcde"));              
console.log(countDuplicates("aabbcde"));          
console.log(countDuplicates("aabBcde"));           
console.log(countDuplicates("indivisibility"));   
console.log(countDuplicates("Indivisibilities"));  
console.log(countDuplicates("aA11"));             
console.log(countDuplicates("ABBA"));  
*/


////// Ex6.4 - isogram    //////
/*function isIsogram(str) {
  str = str.toLowerCase();
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      if (charCount[char]) {
        return false;
      } else {
        charCount[char] = 1;
      }
    }
  }

  return true;
}
console.log(isIsogram('abc'))
console.log(isIsogram('abca'))
*/