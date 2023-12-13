function findNearestGreaterElement(ar) {
  // Create an array to store the nearest greater elements
  let vector = [];

  // Create a stack to store the elements
  let stack = [];

  // Iterate through the elements in reverse order
  for (let i = ar.length - 1; i >= 0; i--) {
    // If the stack is empty, there is no greater element, so insert -1
    while (stack.length > 0 && ar[i] >= stack[stack.length - 1]) {
      stack.pop();
    }

    if (stack.length === 0) {
      vector.push(-1);
    } else {
      vector.push(stack[stack.length - 1]);
    }

    // Push the current element into the stack
    stack.push(ar[i]);
  }

  return vector;
}

let inputArray = [1, 3, 2, 4];
const output = findNearestGreaterElement(inputArray);
console.log(output);
