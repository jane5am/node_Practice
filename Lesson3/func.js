const value = require('./var') // require()은 선언하지 않아도 사용가능한 노드에서 제공하는 함수
console.log(value); // { odd: '홀수입니다', even: '짝수입니다' }

//구조분해할당
// const = require('./var');
// const odd = value.odd;
// const even = value.even;
// 위의 코드와 아래 코드는 같다
const {odd, even} = require('./var');

function checkOddOrEven(number) {
    if (number % 2){
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;