export function mostOften(value: string) {
  let maxChar = "";

  let maxCount = 0;

  for (let i = 0; i < value.length; i++) {
    let count = 1;

    for (let j = i + 1; j < value.length; j++) {
      if (value[i] === value[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;

      maxChar = value[i];
    }
  }

  return maxChar;
}

const result = mostOften("hhhers");

console.log("Most offen:", result);
