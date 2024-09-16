const value = require('./var') // require()은 선언하지 않아도 사용가능한 노드에서 제공하는 함수
console.log(value); // { odd: '홀수입니다', even: '짝수입니다' }

//구조분해할당
// const value = require('./var');
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

/*
    Truthy와 Falsy 값
    JavaScript에서 어떤 값이 "truthy"인지 "falsy"인지는 특정 값들이 "true"처럼 평가되는지 아니면 "false"처럼 평가되는지에 따라 결정됩니다. 
    다음은 몇 가지 대표적인 "falsy" 값들입니다:

    false
    0
    -0
    0n (BigInt의 0)
    "" (빈 문자열)
    null
    undefined
    NaN
    이 값들 이외의 모든 값은 truthy로 평가됩니다. 즉, 숫자 1, "hello", [ ] (빈 배열), { } (빈 객체) 등은 모두 "truthy"입니다.

*/