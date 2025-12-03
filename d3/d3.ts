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

export function p1(banks: string[]): number {
  return banks.reduce((acc, curr) => acc + getJoltage(curr, 2), 0);
}

export function p2(banks: string[]): number {
  return banks.reduce((acc, curr) => acc + getJoltage(curr, 12), 0);
}

export function parseInput(input: string) {
  return input.split("\n");
}
