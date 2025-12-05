function isAccessible(grid: string[][], cx: number, cy: number) {
  if (grid[cx][cy] !== "@") {
    return false;
  }
  const dirs = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  let adj = 0;
  for (const [dx, dy] of dirs) {
    const nx = cx + dx;
    const ny = cy + dy;

    if (
      nx >= 0 &&
      nx < grid.length &&
      ny >= 0 &&
      ny < grid[0].length &&
      grid[nx][ny] === "@"
    ) {
      adj++;
    }
  }
  return adj < 4;
}

function forklift(grid: string[][], options: { single: boolean }) {
  let removed = 0;

  while (true) {
    const pass = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (isAccessible(grid, i, j)) {
          pass.push([i, j]);
        }
      }
    }
    removed += pass.length;
    if (pass.length === 0 || options.single) {
      return removed;
    }
    for (const [x, y] of pass) {
      grid[x][y] = ".";
    }
  }
}

function p1(grid: string[][]): number {
  return forklift(grid, { single: true });
}

function p2(grid: string[][]): number {
  return forklift(grid, { single: false });
}

function parseInput(input: string) {
  return input.split("\n").map((l) => l.split(""));
}

const f = Deno.readTextFileSync("./d4/example.txt");
const input = parseInput(f);

console.log("p1:", p1(input));
console.log("p2:", p2(input));
