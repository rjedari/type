"use strict";
function test(x) {
    for (let i = 1; i <= x; i++) {
        let m = i % 2;
        let n = i % 3;
        let dev = i % 6;
        if (dev === 0) {
            return "fizz buzz";
        }
        else if (n === 0) {
            return "buzz";
        }
        else if (m === 0) {
            return "fizz";
        }
    }
}
test(20);
