//Divide and conquer is a pattern that involves dividing
//data set into smaller and then repeating a process with subset
//of data, this patter can tremendously decrease time complexity.

//example of not best solution
//Given a sorted array of integers, write a function called search
//that accepts a value and returns the index where the value
//passed to the function is located. if the value is not found return -1

const naiveSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

// naiveSearch([1, 2, 3, 5, 6, 8,9, 12, 15, 16, 29], 15)
//using divide and conquer

const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midPoint = Math.floor((min + max) / 2);

    // let currentElement = arr[midPoint]

    if (arr[midPoint] < val) {
      min = midPoint + 1;
    } else if (arr[midPoint] > val) {
      max = midPoint - 1;
    } else {
      return midPoint;
    }
  }
  return -1;
};

// search([1, 2, 3, 5, 6, 8,9, 12, 15, 16, 29], 15)
