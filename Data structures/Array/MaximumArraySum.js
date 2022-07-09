// Maximum subarray sum

const maximumSubarraySum = (arr, d = 3) => {
  let maxsum = -Infinity;
  let j;
  let sum;
  for (let i = 0; i < arr.length; i++) {
    j = i;
    sum = 0;
    while (j < i + 3) {
      sum = sum + arr[j];
      j++;
    }

    if (maxsum < sum) {
      maxsum = sum;
    }
  }

  console.log(maxsum);
};

maximumSubarraySum([1, 2, 4, 1, 5, 2, 1, 3], 2);
