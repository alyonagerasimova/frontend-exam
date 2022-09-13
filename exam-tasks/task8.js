const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function searchGoodDomains(domainsCount, requestsCount, domains, request) {
  const [p, q] = request.split(" ");

  return domains.filter((domain) => {
    return domain.startsWith(p) && domain.endsWith(q);
  }).length;
}

let domains = [];
let requests = [];
let domainsCount = 0;
let i = 0;
let requestsCount = 0;
let j = 0;

process.stdin.on("end", () => {
  process.exit(0);
});

rl.on("line", function (data) {
  if (!domainsCount && !requestsCount) {
    [domainsCount, requestsCount] = data.split(' ').map(Number);
    return;
  }

  if (i < domainsCount) {
    domains.push(data.trim());
    i++;
    return;
  }

  if (j < requestsCount) {
    requests.push(data.trim());
    console.log(searchGoodDomains(domainsCount, requestsCount, domains, requests[j]));
    j++;
  }
});



// let domainsCount = 2;
// let requestsCount = 3;
// let domains = ["ATSR", "ASR"];
// let requests = ["S R", "AT R", "A R"];

// requests.forEach((query) => {
//   console.log(searchGoodDomains(domainsCount, requestsCount, domains, query));
// });
