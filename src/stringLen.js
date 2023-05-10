const stringLength = (string) => {
    let count = 0;
    for (let i=0;i<string.length;i++){
        count++;
    }
    return count;
}
module.exports = stringLength;
console.log(stringLength('hello'));
