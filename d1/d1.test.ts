import { p1, p2, parseInput } from "./d1.ts";
import { assertEquals } from "jsr:@std/assert";

const exfile = Deno.readTextFileSync("./d1/ex.txt");
const infile = Deno.readTextFileSync("./d1/in.txt");

Deno.test("p1", () => {
  assertEquals(p1(parseInput(exfile)), 3);
  assertEquals(p1(parseInput(infile)), 964);
});

Deno.test("p2", () => {
  assertEquals(p2(parseInput(exfile)), 6);
  assertEquals(p2(parseInput(infile)), 5872);
});
