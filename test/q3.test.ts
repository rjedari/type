import { expect, test } from "vitest";
import { mostOften } from "../q3";
test("if it is the most offen leter"),()=>{
    expect(mostOften("hhtddbbb")).toBe("b")
}