import { expect, test } from "vitest";
import { checkNum } from "../q4";
test ("if it is false ", ()=>{
expect(checkNum("hiii","nanaa")).toBe("no")
})
test ("if it is true ", ()=>{
    expect(checkNum("hiii","nana")).toBe("yes")
    })