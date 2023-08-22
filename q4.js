"use strict";
function checkNum(value, oldValue) {
    let x = value.split("");
    let y = oldValue.split("");
    if (x.length == y.length) {
        return "yes";
    }
    else {
        return "no";
    }
}
checkNum("hello", "worlrd");
