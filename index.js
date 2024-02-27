/*
  1. Rewrite the Problem in Your Own Words
  2. Write Your Own Test Cases
  3. Pseudocode
  4. Code
  5. Make It Clean and Readable
  6. Optimize
*/

/* 
  Add your pseudocode here
  .reverse approach
  1. .split('') to turn string into array
  2. .reverse 
  3. .join()
  4. compare the original word to value of new reversed word 
*/

function isPalindromeReverse(word) {
  // Write your algorithm here
  let splitString = word.split('')
  splitString.reverse()
  splitString = splitString.join('')
  //let wordBackwards = splitString.split('').reverse().join('')
  return splitString === word
  /*
  let result = false //initializing the variable
  if(word === wordBackwards) {
    result = true 
  } else {
    result = false
  }
  return result 
  */
}

/*

A. Case 1: there are an odd number of letters: if i === j
B. Case 2: there are an even number of letters: i === j-1, j < i

1. loop i loops over first half of the string
  - what would a for loop look like that iterates over first half of string
2. j is the index of the opposing letter 
  - how do we calculate j based on i

3. Return false if string[i] !== string[j]
4. Return true if (i === j) OR (if i === j-1 AND string[i] === string[j])

*/

function isPalindrome(word){
  if(word.length === 0){ //in case word is empty string
    return false
  }
  //1. j
  let j
  //2. start writing our iteration thus declaring i
  //use length/2 to iterate over only half the characters, Math.floor always rounds down
  for(let i = 0; i < (word.length/2); i++){
    //3. calculate j (based on i) : word.length % 2 === 0 ? i = j : i = j - 1;
    j = word.length - i - 1
    //4. compare letters at i and j
    //if word[i] !== word[j] return false
    if(word[i] !== word[j]){
      return false
    }
  }
  //5. we have finished our iteration, we never return false (which would have exited the function) therefore we can return true 
  // keep in mind, once you return you exit the function completely
  // keep in mind, if we returned false we wouldn't have had to check the rest of the string
  return true

}



/*
  Add written explanation of your solution here
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
