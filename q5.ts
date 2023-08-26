export function countVowels(value: string) {
    let x = value.split("");
  
    const vowels = ["a", "e", "i", "o", "u"];
  
    let count = 0;
  
    for (let i = 0; i < value.length; i++) {
      if (vowels.includes(value[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  countVowels("hello world!");