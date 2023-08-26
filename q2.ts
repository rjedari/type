export function divCheck(x: number) {

      let m = x % 2;
  
      let n = x % 3;
  
      let dev = x % 6;
  
      if (dev === 0) {
        return "fizz buzz";
      } else if (n === 0) {
        return "buzz";
      } else if (m === 0) {
        return "fizz";
      }
    
  }
  
  const test1=divCheck(6);
  const test2=divCheck(2);
  const test=divCheck(3);
  console.log(test1,test2,test);
         