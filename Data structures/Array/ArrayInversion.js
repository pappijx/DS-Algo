// Array Inversion Count
// In an array, two elements at index i and j forms an inversion if a[i] > a[j] and i<j.

const arrayInversion = (array) => {
  let result = [];
  if (array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[i] > array[j] && i < j) {
          result.push({ x: array[i], y: array[j] });
        }
      }
    }
  }

  return result;
};

console.log("<------ start ------>");
let outputResultant = arrayInversion([2, 1, 4, 3, 5]);
console.log(`Count of inversion pairs : ${outputResultant.length}`);
console.log("Time complexity : O(n^2)");
console.log("<------ end ------>");
