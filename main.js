// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


const trueExample = "A man, a plan, a canal: Panama";
const falseExample = "race a car";
const edgeTrue = "0P";

////// first attempt ///////
function palindromeChecker(string) {
  let answer = true;
  const regex = /[A-Za-z\d]/g;
  const specialsRemoved = string.match(regex);                      ////working with regex for the first time caused lots of tinkering
  if (specialsRemoved === null){                                    ////truthfully this is probably equal to 2 1/2 attempts. solved.
    return answer = true;
  }
  const specialsRemovedAndJoined = specialsRemoved.join('').toLowerCase();
  const reversedAndRemoved = [...specialsRemovedAndJoined].reverse();
  [...specialsRemovedAndJoined].forEach((item, index) => {
    if (item !== reversedAndRemoved[index]){
      return answer = false;
    }
  }); return answer;
}

// console.log(palindromeChecker(trueExample));
// console.log(palindromeChecker(falseExample));
// console.log(palindromeChecker(edgeTrue));
