import { p1, p2, parseInput } from "./d2.ts";
import { assertEquals } from "@std/assert";

const exfile = Deno.readTextFileSync("./d2/example.txt");
const infile = Deno.readTextFileSync("./d2/in.txt");

Deno.test("p1", () => {
  assertEquals(p1(parseInput(exfile)), 1227775554);
  assertEquals(p1(parseInput(infile)), 28844599675);
});

Deno.test("p2", () => {
  assertEquals(p2(parseInput(exfile)), 4174379265);
  assertEquals(p2(parseInput(infile)), 48778605167);
});
