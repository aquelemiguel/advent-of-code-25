function p1(ranges: number[][]): number {
  let res = 0;

  for (const [l, r] of ranges) {
    for (let i = l; i <= r; i++) {
      const str = String(i);
      const len = str.length;

      if (len % 2 !== 0) {
        continue;
      }
      if (str.slice(0, len / 2) === str.slice(len / 2)) {
        res += i;
      }
    }
  }
  return res;
}

function p2(ranges: number[][]): number {
  let res = 0;

  for (const [l, r] of ranges) {
    for (let i = l; i <= r; i++) {
      const str = String(i);
      let isInvalid = false;

      for (let k = 1; k <= str.length / 2; k++) {
        const chunks = str.match(new RegExp(`.{1,${k}}`, "g"));
        if (chunks?.every((c) => c === chunks[0])) {
          isInvalid = true;
          break;
        }
      }
      if (isInvalid) {
        res += i;
      }
    }
  }
  return res;
}

function parseInput(input: string) {
  return input.split(",").map((r) => r.split("-").map(Number));
}

const f = Deno.readTextFileSync("./d2/example.txt");
const input = parseInput(f);

console.log("p1:", p1(input));
console.log("p2:", p2(input));
