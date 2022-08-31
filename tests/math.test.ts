import { asserts } from "./deps.ts";

import { add } from "../src/math.ts";

Deno.test(function addTest() {
  asserts.assertEquals(add(2, 3), 5);
});
