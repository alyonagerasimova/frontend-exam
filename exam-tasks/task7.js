const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function task7(planString, q, line) {
  const [start, end] = line.split(" ").map(Number);
  const partOfPlan = planString.slice(start - 1, end).split("").sort().join("");

  if (planString.includes(partOfPlan)) {
    return partOfPlan.length - 1;
  }

  let steps = 0;

  for (let j = 0; j < partOfPlan.length - 1; j++) {
      const start = planString.indexOf(partOfPlan[j]);

      if (j === 0) {
        steps = start;
      }

      if (planString.indexOf(partOfPlan[j + 1]) < start) {
        steps += partOfPlan.length - start;
      } else {
        steps += planString.indexOf(partOfPlan[j + 1]) - start;
      }
  }
   return steps;
}

let planString = '';
let q = 0;
let substrsOrder = '';

process.stdin.on("end", () => {
  process.exit(0);
});

rl.on("line", function (data) {
  if (!planString) {
    planString = data;
  }else if (!q) {
    q = data;
  }else {
    substrsOrder = data;
    console.log(task7(planString, q, substrsOrder));
  }
});


// let planString = "hello";
// let q = 4;
// let substrsOrder = ["1 5", "1 2", "2 5", "1 3"];

// for (let i = 0; i < q; i++) {
//   console.log(task7(planString, q, substrsOrder[i]));
// }