const reverseString = (string) => {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  };
  
  console.log(reverseString('Binod'));
  module.exports = reverseString;
  
module.exports = reverseString;