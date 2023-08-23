export function isPalindrome(str: string): boolean {
  const specials = ['!', '?', '.', ' '];
  const clearStr = str.toLowerCase().split('').filter((char) => !specials.includes(char));
  const length = Math.floor(clearStr.length / 2);
  
  let index = 0;
  let condition = true;
  while (index < length) {
    const start = clearStr[index];
    const end = clearStr[clearStr.length - index - 1];
    condition = start === end;
    if (!condition) {
      break;
    }
    index ++
  }
  return condition
}
const e1 = isPalindrome('glg glg');
const e2 = isPalindrome('Cigar? Toss it in a can. It is so tragic');
const e3 = isPalindrome('sit ad est love');

console.log('e1 is palindrome:', e1);
console.log('e2 is palindrome:', e2);
console.log('e3 is palindrome:', e3);
