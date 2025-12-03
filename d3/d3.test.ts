import { p1, p2, parseInput } from "./d3.ts";
import { assertEquals } from "@std/assert";

const exfile = Deno.readTextFileSync("./d3/example.txt");
const infile = Deno.readTextFileSync("./d3/in.txt");

Deno.test("p1", () => {
  assertEquals(p1(parseInput(exfile)), 357);
  assertEquals(p1(parseInput(infile)), 17330);
});

Deno.test("p2", () => {
  assertEquals(p2(parseInput(exfile)), 3121910778619);
  assertEquals(p2(parseInput(infile)), 171518260283767);
});
