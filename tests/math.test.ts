import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import { add, subtract } from "../src/math.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subtractTest() {
  assertEquals(subtract(5, 3), 2);
});
