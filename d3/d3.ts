function getJoltage(s: string, k: number): number {
  let res = "";

  for (let skip = k - 1; skip >= 0; skip--) {
    const win = s.slice(0, s.length - skip);
    let hi = 0;

    for (let i = 0; i < win.length; i++) {
      if (win[i] > win[hi]) {
        hi = i;
      }
    }
    res += win[hi];
    s = s.slice(hi + 1);
  }
  return Number(res);
}

function p1(banks: string[]): number {
  return banks.reduce((acc, curr) => acc + getJoltage(curr, 2), 0);
}

function p2(banks: string[]): number {
  return banks.reduce((acc, curr) => acc + getJoltage(curr, 12), 0);
}

function parseInput(input: string) {
  return input.split("\n");
}

const f = Deno.readTextFileSync("./d3/example.txt");
const input = parseInput(f);

console.log("p1:", p1(input));
console.log("p2:", p2(input));
