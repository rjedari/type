"use strict";
function isPalindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, "");
    let reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
}
const x = isPalindrome("Cigar? Toss it in a can. It is so tragic");
const y = isPalindrome("sit ad est love");
