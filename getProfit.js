function getProfit(arr) {
  let res = [];

  if (arr.length < 2) {
    return res;
  }
  let biggestDiff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = arr[j] - arr[i];
      if (diff <= 0) {
        continue;
      }
      if (diff > biggestDiff) {
        res = [i, j];
        biggestDiff = diff;
      }
    }
  }

  return res;
}

const arr = [13, 6, 3, 4, 10, 2, 3];
// const arr = [6, 5, 4, 3];
// const arr = [3, 3, 3, 3];

const res = getProfit(arr);
console.log(res);
