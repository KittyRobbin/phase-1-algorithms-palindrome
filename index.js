function isPalindrome(word) {
  // Write your algorithm here
     // Remove non-alphabetic characters and convert to lowercase
     str = str.replace(/[^a-z]/g, "").toLowerCase();

     // Check if the string is equal to its reverse
     return str === str.split('').reverse().join('');
 }

 console.log(isPalindrome("racecar"));           // Should return true
console.log(isPalindrome("mom"));               // Should return true
console.log(isPalindrome("hello"));             // Should return false
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Should return true
console.log(isPalindrome("Was it a car or a cat I saw?"));   // Should return true


/* 
  Add your pseudocode here
  FUNCTION isPalindrome(str):
    str = REMOVE_NON_ALPHABETIC_AND_LOWERCASE(str)
    reversed = REVERSE_STRING(str)
    RETURN str EQUALS reversed

FUNCTION REMOVE_NON_ALPHABETIC_AND_LOWERCASE(str):
    str = CONVERT_TO_LOWERCASE(str)
    str = REMOVE_NON_ALPHABETIC_CHARACTERS(str)
    RETURN str

FUNCTION REVERSE_STRING(str):
    splitStr = SPLIT_STRING_INTO_ARRAY_OF_CHARACTERS(str)
    reversedArray = REVERSE_ARRAY(splitStr)
    reversed = JOIN_ARRAY_TO_STRING(reversedArray)
    RETURN reversed

*/

/*
  Add written explanation of your solution here
  function isPalindrome(str) {
    str = removeNonAlphabeticAndLowercase(str);
    return str === reverseString(str);
}

function removeNonAlphabeticAndLowercase(str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/g, ""); // Removes non-alphabetic characters
    return str;
}

function reverseString(str) {
    const splitStr = str.split('');
    const reversedArray = splitStr.reverse();
    return reversedArray.join('');
}

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
