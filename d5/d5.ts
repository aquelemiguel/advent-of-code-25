function isFresh(ranges: number[][], ing: number): boolean {
  for (const [l, r] of ranges) {
    if (ing >= l && ing <= r) {
      return true;
    }
  }
  return false;
}

function p1(ranges: number[][], ings: number[]) {
  return ings.reduce((acc, curr) => (isFresh(ranges, curr) ? acc + 1 : acc), 0);
}

function p2(ranges: number[][]) {
  ranges.sort(([al], [bl]) => al - bl); // sort by l-bound
  const flat = [ranges[0]];

  for (const [l, r] of ranges.slice(1)) {
    const [ll, lr] = flat[flat.length - 1];

    // if curr l-bound is inside prev range
    if (l >= ll && l <= lr) {
      flat[flat.length - 1][1] = Math.max(r, lr); // expand the prev r-bound
    } else {
      flat.push([l, r]);
    }
  }

  return flat.reduce((acc, [l, r]) => acc + r - l + 1, 0);
}

function parseInput(input: string) {
  const str = input.split("\n\n");
  const ranges = str[0].split("\n").map((r) => r.split("-").map(Number));
  const ings = str[1].split("\n").map(Number);

  return { ranges, ings };
}

const f = Deno.readTextFileSync("./d5/example.txt");
const { ranges, ings } = parseInput(f);

console.log("p1:", p1(ranges, ings));
console.log("p2:", p2(ranges));
