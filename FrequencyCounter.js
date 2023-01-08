// Write a function called same, which accepts two arrays
// The function should return true if every value in the array
// has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// ---Edge cases ---
// The order of appearance must be different
// The must be same amount of item in each array
// The frequency of the corresponding array must be same.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arra2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr1.splice(correctIndex, 1);
  }
  return true;
};

let arr1 = [2, 3, 4];
let arra2 = [4, 9, 16];

same(arr1, arra2);
