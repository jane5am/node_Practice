const odd = '홀수입니다';
const even = '짝수입니다';

module.exports = {
    odd,
    even, // 다른 파일에서 쓸 변수, 즉 넘겨줄 변수를 넣어준다
            // 원래는 odd:odd, even:even 이라는 객체다
            // 이 module.exports는 파일에서 단 한번만 써야한다
}