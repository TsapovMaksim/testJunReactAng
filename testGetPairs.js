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

function testGetPairs(arr, sum, expected) {
  const formattedGetPairsRes = getPairs(arr, sum)
    .flat(1)
    .sort((a, b) => a - b);
  const formattedExpected = expected.flat(1).sort((a, b) => a - b);
  return formattedGetPairsRes.every((el, i) => el === formattedExpected[i]);
}

console.log(
  testGetPairs([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5, [
    [-5, 10],
    [5, 0],
    [3, 2],
    [3, 2],
  ])
);
