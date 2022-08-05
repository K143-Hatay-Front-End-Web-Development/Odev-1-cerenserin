 function Palindromic() {
    for (let i = 999; i > 899; i--) {
      for (let k = 999; k > 899; k--) {
        let max = i * k;
        if (palindromic(max)) {
          return i * k;
        }
      }
    }
  }
  const palindromic = (i) => {
    return i.toString() == i.toString().split("").reverse().join("");
  };
  
  console.log(Palindromic()); 

