// Find least Occurred Element in an array
// Given an Unsorted array, write a function to find the least occuring element in that array
// [1,1,2,3,0,0,5,1,2,1,2,2]

const findLeastOccurred = (inputArray) => {
  let elementCountMap = new Map();
  let currentLowestElement = null;
  let currentLowestCount = Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    elementCountMap.set(element, elementCountMap.get(element) + 1 || 1);
    if (elementCountMap.get(element) <= currentLowestCount) {
      currentLowestElement = element;
      currentLowestCount = elementCountMap.get(element);
    }
  }

  return [currentLowestElement, currentLowestCount];
};

let array = [1, 1, 1, 2, 1, 1];
let result = findLeastOccurred(array);
console.log(`The lowest occuring element is ${result[0]} and it occurs ${result[1]} times.`);
