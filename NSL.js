function findNearestSmallestElement(arr) {
  let vector = [];
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= stack[stack.length - 1]) {
      stack.pop();
    }

    vector[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

    stack.push(arr[i]);
  }

  return vector;
}

console.log(findNearestSmallestElement([4, 5, 2, 10, 8]));
