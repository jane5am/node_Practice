const odd = '홀수입니다';
const even = '짝수입니다';

// module.exports = {
//     odd,
//     even, // 다른 파일에서 쓸 변수, 즉 넘겨줄 변수를 넣어준다
//             // 원래는 odd:odd, even:even 이라는 객체다
//             // 이 module.exports는 파일에서 단 한번만 써야한다
// }

// 위 module.exports와 아래 코드는 동일한 코드
exports.odd = odd;
exports.even = even;

// module.exports === exports === {}
// module.exports와 exports는 같다 그리고 처음에 이건 빈 객체이다
// 그래서 odd, even을 넣은 경우 
// module.exports === exports === { odd, even } 이 성립한다.

// 그런데 module.exports에 fuction을 넣는 경우는 얘기가 다르다
// module.exports = checkOddOrEven; 을 예로 들어보면
// module.exports !== exports === {} 이 성립한다. 객체 참조관계가 끊기기 때문에

// 그래서 보통은 한가지만 모듈로 빼고 싶은 경우는 module.exports로 하나 넣으면 되고,
// 여러개를 넣고 싶은 경우는 두가지 경우 중 하나를 사용한다.
// 하지만 exports.odd = odd; 방법을 자주 사용한다.
// 그리고 만약 두번째 방법(exports.odd = odd;)을 사용했을 경우 계속 그 방법으로 써야한다.
// model.exports과 같이 사용하는 순간 참조관계가 끊기기 때문에 두번째 방법은 무시된다.

