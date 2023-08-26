import { expect, test } from "vitest";
import { divCheck } from "../q2";
test("if it is devidaable to 6", () => {
  expect(divCheck(6)).toBe("fizz buzz");
  expect(divCheck(12)).toBe("fizz buzz");
});
test("to be devidable to 2", () => {
  expect(divCheck(4)).toBe("fizz");
  expect(divCheck(2)).toBe("fizz");
});
test("to be devidable to 3", () => {
  expect(divCheck(3)).toBe("buzz");
  expect(divCheck(9)).toBe("buzz");
});
