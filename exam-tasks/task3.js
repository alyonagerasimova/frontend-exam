const readline = require("readline");

function task3(days, subscriptions) {
  const numbers = subscriptions.split(" ").map(Number);
  const daysNum = Number(days);

  if (daysNum === 2) {
    return getResult(numbers.sort((a, b) => b - a));
  }

  function getResult(array = []) {
    return array.reduce((result, num, i) => {
      return result + (i % 2 === 0 ? 1 : -1) * num;
    }, 0);
  }

  let canBeChanged = true;

  function rearrange(array = []) {
    let minPositive = [0, 1000];
    let maxNegative = [0, 0];
    for (let i = 0; i < array.length; i += 2) {
      if (array[i] < minPositive[1]) {
        minPositive = [i, array[i]];
      }
    }
    for (let i = 1; i < array.length; i += 2) {
      if (array[i] > maxNegative[1]) {
        maxNegative = [i, array[i]];
      }
    }

    if (minPositive[1] < maxNegative[1]) {
      array[minPositive[0]] = maxNegative[1];
      array[maxNegative[0]] = minPositive[1];
    } else {
      canBeChanged = false;
    }
  }

  rearrange(numbers);
  if (canBeChanged) {
    rearrange(numbers);
  }

  return getResult(numbers);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let days, subscriptions;

process.stdin.on("end", () => {
  console.log(task3(days, subscriptions));
  process.exit(0);
});

rl.on("line", function (data) {
  if (!days) {
    days = data;
  } else {
    subscriptions = data;
  }
});

// let days = 3;
// let subscriptions = "2 2 2";
// console.log(task3(days, subscriptions));