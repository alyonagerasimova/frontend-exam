const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const environments = [{}];

function getValue(environmentIndex = 0, value) {
  if (environmentIndex < 0) {
    return 0;
  }

  if (environments[environmentIndex][value]) {
    return environments[environmentIndex][value];
  }

  return getValue(environmentIndex - 1, value);
}

function task4(currentLine = "") {
  if (currentLine == "{") {
    environments.push({});
    return;
  }

  if (currentLine == "}") {
    environments.pop();
    return;
  }
  const currenEnvironment = environments[environments.length - 1];

  const [variable, value] = currentLine.trim().split("=");

  if (Number.isNaN(Number(value))) {
    currenEnvironment[variable] = getValue(environments.length - 1, value);
    console.log(currenEnvironment[variable]);
  } else {
    currenEnvironment[variable] = Number(value);
  }
}

process.stdin.on("end", () => {
  process.exit(0);
});

rl.on("line", function (data) {
  task4(data);
});


// let lines = ['thats=zero',
//             'a=10',
//             'ten=a',
//             'aboba=ten',
//             'ten=-10',
//             '{',
//             'b=a',
//             'a=1337',
//             'c=a',
//             '{',
//             'd=a',
//             'e=aboba',
//             '}',
//             '}',
//             'lol=a'];

// for (let i = 0; i < lines.length; i++) {
//   console.log(task4(lines[i]));
// }
