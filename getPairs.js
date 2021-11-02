function getPairs(arr, resSum) {
  const usedIndexes = [];
  const res = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let isFirstNumberUsed = usedIndexes.includes(i);
    if (isFirstNumberUsed) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      const isSecondNumberUsed = usedIndexes.includes(j);
      if (sum !== resSum || isSecondNumberUsed || isFirstNumberUsed) {
        continue;
      }
      usedIndexes.push(j);
      isFirstNumberUsed = true;
      res.push([arr[i], arr[j]]);
    }
  }

  return res;
}

const sum = 5;
const arr = [22, 3, 5, 0, 2, 2];
// const arr = [-5, 33, 2, 2, 3, 5, 0, 10, 3];
// const arr = [5, 5, 5, 0, 0, 0, 5];
// const arr = [3, 3, 6, 0];

const res = getPairs(arr, sum);
console.log(res);
