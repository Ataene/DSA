//Sliding window is the pattern that involves creating
//a wwindow which can either be an array or number from one
//position to another.
//Depending on a certain condition, the window either increases
// or closes (and a new window is created)
//Very useful for keeping track of a subset of data in an array/string.

//Example
//Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let max = -infinity;

  //loop through the array
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; J < num; j++) {
      temp += arr[i + j];
    }
    if (temp > maximum) {
      max = temp;
    }
    //find the sum of two integers that add up to n
  }
  return max;
};

//==Better solution==

const maxSumBetter = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

// maxSumBetter([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
