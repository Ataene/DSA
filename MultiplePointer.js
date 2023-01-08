// Creating pointers or values that correspond to an index
// or position and move towards the beginning,
//end or middle based on certain conditions

//Very efficient for solving with minimal space complexity
//---example---
//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0
//Return an array that includes both values that sum to zero or undefined if a pair deos not exist

//--Edge cases--
//is the array sorted

const sumZero = (arr) => {
  let start = 0;

  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] === 0) {
      return [arr[start], arr[end]];
    } else if (arr[start] + arr[end] > 0) {
      end--;
    } else {
      start++;
    }
  }
};

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 10]);
