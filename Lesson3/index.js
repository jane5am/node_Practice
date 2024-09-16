const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber); // [Function: checkOddOrEven] , 메소드도 변수에 담기 가능
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));