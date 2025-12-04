import { p1, p2, parseInput } from "./d4.ts";
import { assertEquals } from "@std/assert";

const exfile = Deno.readTextFileSync("./d4/example.txt");
const infile = Deno.readTextFileSync("./d4/in.txt");

Deno.test("p1", () => {
  assertEquals(p1(parseInput(exfile)), 13);
  assertEquals(p1(parseInput(infile)), 1435);
});

Deno.test("p2", () => {
  assertEquals(p2(parseInput(exfile)), 43);
  assertEquals(p2(parseInput(infile)), 8623);
});
