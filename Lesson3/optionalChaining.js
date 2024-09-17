// ?? (널 병합 연산자)
// 주로 || 연산자 대용으로 사용되며, falsy값 중 null과 nundefined 일때만 뒤로 넘어간다

const a = 0;
const b = a || 3;
console.log(b); //3

const c = 0;
const d = c ?? 3;
console.log(d); // 0

const e = null;
const f = e ?? 3;
console.log(f); //3

// ?. (옵셔널 체이닝 연산자)
// ?.은 ?.'앞’의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다
