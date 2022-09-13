const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function task1(first, second){
  first = first.split(' ').map(Number);
  second = second.split(' ').map(Number);
  let minX, minY, maxX, maxY = 0;

  first[0] < second[0] ? minX = first[0] : minX = second[0];
  first[1] < second[1] ? minY = first[1] : minY = second[1];
  first[2] > second[2] ? maxX = first[2] : maxX = second[2];
  first[3] > second[3] ? maxY = first[3] : maxY = second[3];

  const w = maxX - minX;
  const h = maxY - minY;
  return w>=h ? w*w : h*h;
}

let firstLine, secondLine;

process.stdin.on("end", () => {
  console.log(task1(firstLine, secondLine));
  process.exit(0);
});

rl.on("line", function (data) {
    if (!firstLine) {
        firstLine = data;
    } else {
        secondLine = data;
    }
});


// let firstLine = '6 6 8 8';
// let secondLine = '1 8 4 9';
// console.log(task1(firstLine, secondLine));