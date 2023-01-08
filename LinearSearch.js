//Search through and array of element to find a value.
//

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};

// linearSearch([2, 5, 6, 8, 5, 9], 7);
