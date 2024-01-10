function isPalindrome(word) {
  // Write your algorithm here
   const lowercaseWord = word.toLowerCase();
    return lowercaseWord === lowercaseWord.split ('').reverse().join('');
}

/* 
  Add your pseudocode here
   1. converting input word to lowercase.
   2. compare lowecase with its reversed version.
   3.if equall return true if not return false.
*/

/*
  Add written explanation of your solution here
   convert the input word to lowercase
   chack if lowercase word is equal to its reversed version
    return true is equal return false if now.
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
