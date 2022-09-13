const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sortTurpleFn(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

function task6(count, lines = []) {
  const floorsArray = lines.map((it) => it.split(" ").map(Number));
  const cacheMap = {};
  floorsArray.sort(sortTurpleFn);

  function getNextIndexes(index = 0) {
    if (cacheMap[index]) {
      return cacheMap[index];
    }

    const [_, endFloor] = floorsArray[index];
    const nextIndexes = [];

    for (let i = index + 1; i < floorsArray.length; i++) {
      const [start, _] = floorsArray[i];
      if (start === endFloor) {
        nextIndexes.push(i);
      } else if (!!nextIndexes.length) {
        break;
      }
    }

    cacheMap[index] = nextIndexes;
    return nextIndexes;
  }

  function findWay(index = 0, waysIndexes = [0]) {
    const next = getNextIndexes(index);

    if (!next.length) {
      return waysIndexes.length;
    }
    return Math.max(...next.map((i) => findWay(i, [...waysIndexes, i])));
  }

  function searchStartIndexes() {
    const startIndexes = [0];
    for (let i = 0; i + 1 < floorsArray.length; i++) {
      if (!getNextIndexes(i).length) {
        startIndexes.push(i + 1);
      }
    }
    return startIndexes;
  }

  return Math.max(...searchStartIndexes().map((i) => findWay(i, [i])));
}

let count;
const lines = [];

process.stdin.on("end", () => {
  console.log(task6(count, lines));
  process.exit(0);
});

rl.on("line", function (data) {
  if (!count) {
    count = data;
  } else {
    lines.push(data);
  }
});

// const linesTest = ["6 8", "5 6", "7 8", "5 7", "4 5", "3 5", "0 2"];
// const linesTest1 = ["6 9", "7 8", "5 7", "2 6", "2 5", "2 2", "2 2", "0 2"];
// const linesTest2 = ["6 8", "5 6", "2 6", "2 5", "2 2", "2 2", "0 2"];
// console.log(task6(linesTest.length, linesTest2));