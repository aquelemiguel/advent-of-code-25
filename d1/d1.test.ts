import { p1, p2, parseInput } from "./d1.ts";
import { assertEquals } from "@std/assert";
import { join } from "@std/path";

const exfile = Deno.readTextFileSync(join(import.meta.dirname!, "ex.txt"));
const infile = Deno.readTextFileSync(join(import.meta.dirname!, "in.txt"));

Deno.test("p1", () => {
  assertEquals(p1(parseInput(exfile)), 3);
  assertEquals(p1(parseInput(infile)), 964);
});

Deno.test("p2", () => {
  assertEquals(p2(parseInput(exfile)), 6);
  assertEquals(p2(parseInput(infile)), 5872);
});
