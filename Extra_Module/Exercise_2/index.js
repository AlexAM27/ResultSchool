console.log(isEqualSymbols('адрес', 'среда')) // true 
console.log(isEqualSymbols('ноутбук', 'программист')) // false 

function isEqualSymbols(str1, str2) { 
  const first = [...str1].sort();
  const second = [...str2].sort();
  return first.length === second.length && first.every((symb, index) => symb === second[index]);

  // if() {
  //   areEqual = false;
  // } else {
  //   for (const [index, symb] of first.entries()) {
  //     if(symb !== second[index]) {
  //       areEqual = false;
  //       break;
  //     }
  //   }
  // }
  // return areEqual;
}
