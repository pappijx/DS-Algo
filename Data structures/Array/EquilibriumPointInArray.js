// Equilibrium point in array
// Given an unsorted array, write a function to find the equilibrium point.
// Equilibrium point is the index of array where sum of elements before it is equal to the sum of elements after it.
// [5,5,2,6,4]

const equilibriumPointFinder = (array) => {
  if (array.length > 2) {
    let initial = 1;
    let sumLeft = 0;
    let sumRight = 0;

    while (initial < array.length) {
      sumLeft += array[initial - 1];
      if (initial === array.length - 1) {
        sumRight = array[array.length - 1];
      } else {
        for (let i = initial + 1; i < array.length; i++) {
          sumRight += array[i];
        }
      }
      console.log("leftSum : " + sumLeft);
      console.log("rightSum : " + sumRight);
      if (sumLeft === sumRight) {
        return initial;
      } else {
        initial++;
        sumRight = 0;
      }
    }
  }

  return -1;
};

let inputArray = [5,5,2,6,4];
let result = equilibriumPointFinder(inputArray);
console.log("<------ start ------>");
console.log(
  result === -1
    ? "No equilibrium index available"
    : `The equilibrium index is at ${result} and element at equilibrium index is ${inputArray[result]}`
);
console.log("Time complexity : O(n^2)");
console.log("<------ end ------>");
