const readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let wordsCount = 0;
let i = 0;
let queriesCount = 0;
let j = 0;

let dictionary = [];
let sortedDictionary = [];

function getQueryResult(number, query) {
    const result = sortedDictionary.filter(word => {
        return word.startsWith(query);
    });

    if (result.length >= number) {
        const index = dictionary.indexOf(result[number-1]);
        return index + 1;
    } else {
        return -1;
    }
}

function sortDictionary() {
    sortedDictionary = [...dictionary].sort();
}

process.stdin.on("end", () => {
  process.exit(0);
});

rl.on("line", function (data) {
  if (!wordsCount && !queriesCount) {
    [wordsCount, queriesCount] = data.split(' ').map(Number);
    return;
  }

  if (i < wordsCount) {
    dictionary.push(data.trim());
    i++;
    return;
  }

  if (j === 0) {
    sortDictionary();
  }

  if (j < queriesCount) {
    const [number, query] = data.trim().split(' ');
    console.log(getQueryResult(Number(number), query));
    j++;
  }
});

// dictionary = ['ad','a','abc','aboba','b'];
// let querysStr = ['3 a','2 ab','1 b'];

// sortDictionary();
// for (let i = 0; i < querysStr.length; i++) {
//   const [number, query] = querysStr[i].trim().split(' ');
//   console.log(getQueryResult(Number(number), query));
// }
