const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function task2(years, lines) {
    const linesLength = Number(years);
    if (linesLength !== lines.length) {
        return NaN;
    }

    function toDict(array) {
        return array.reduce((acc, element) => {
            if (!acc[element]) {
                acc[element] = 1
            } else {
                acc[element] = acc[element] + 1;
            }
            return acc;
        }, {});
    }

    function findMaxCountOfLine(acc) {
        let maxCount = 0;
        Object.keys(acc).forEach(key => {
            if (acc[key] > maxCount) {
                maxCount = acc[key];
            }
        })
        return maxCount;
    }

    const commands = toDict(lines.map(line => line.split(' ').sort().join('')));
    return findMaxCountOfLine(commands);
}

let years;
const lines = [];

process.stdin.on("end", () => {
    console.log(task2(years, lines));
    process.exit(0);
});

rl.on("line", function (data) {
    if (!years) {
        years = data;
    } else {
        lines.push(data);
    }
});



// let years = 5;
// let lines = [ "MIKHAIL VLADISLAV GRIGORY",
//             "VLADISLAV MIKHAIL GRIGORY",
//             "IVAN ILYA VLADIMIR",
//             "ANDREY VLADIMIR ILYA",
//             "VLADIMIR IVAN ANDREY",
// ]

// console.log(task2(years, lines));