const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

///
// place for code
///

process.stdin.on("end", () => {
    // Logging result
  console.log('!On end!');
  process.exit(0);
});

rl.on("line", function (data) {
    // Your code
});