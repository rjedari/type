import { expect, test } from "vitest";
import { countVowels } from "../q5";
test("if it is true ", () => {
  expect(countVowels("heloo")).toBe(3);
});
