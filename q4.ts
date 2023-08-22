function checkNum(value: string, oldValue: string) {
    let x = value.split("");
  
    let y = oldValue.split("");
  
    if (x.length == y.length) {
      return "yes";
    } else {
      return "no";
    }
  }
  
  checkNum("hello", "worlrd");
  