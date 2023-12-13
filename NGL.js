function findNearestGreaterElement(ar) {
  let vector = new Array(ar.length);
  let stack = [];

  // Process elements to the right
  for (let i = 0; i < ar.length; i++) {
    while (stack.length > 0 && ar[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    vector[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(ar[i]);
  }

  // Clear the stack
  stack = [];

  // Process elements to the left
  for (let i = ar.length - 1; i >= 0; i--) {
    while (stack.length > 0 && ar[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    vector[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(ar[i]);
  }

  return vector;
}

let result = [1, 3, 2, 4];
let output = findNearestGreaterElement(result);
console.log(output);
