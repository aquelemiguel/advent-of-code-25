export function p1(input: [string, number][]) {
  let dial = 50;
  let res = 0;

  for (const [dir, clicks] of input) {
    if (dir === "R") {
      dial = (dial + clicks) % 100;
    } else {
      dial = (dial - clicks) % 100;
    }
    if (dial === 0) {
      res++;
    }
  }

  return res;
}

export function p2(input: [string, number][]) {
  let dial = 50;
  let res = 0;

  for (const [dir, clicks] of input) {
    res += Math.floor(clicks / 100);
    const c = clicks % 100;

    if (dir === "R") {
      if (dial + c >= 100) {
        res++;
      }
      dial = (dial + c) % 100;
    } else {
      if (dial !== 0 && dial - c <= 0) {
        res++;
      }
      dial = (dial - c + 100) % 100;
    }
  }

  return res;
}

export function parseInput(input: string) {
  return input
    .split("\n")
    .map((r): [string, number] => [r[0], Number(r.slice(1))]);
}
