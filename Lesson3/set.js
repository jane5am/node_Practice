// set 주로 배열 대신 사용한다 하지만 모두 대체하지는 못한다
// 중복을 허용하지 않는다.

const s = new Set();
s.add(false); // add(요소)로 Set에 추가한다
s.add(1);
s.add('1');
s.add(1); // 중복이므로 무시된다
console.log(s); // Set(3) { false, 1, '1' }
console.log(s.size); // 3

s.has(1); // hsa(요소)로 요소 존재 여부를 확인한다
console.log(s.has(1)); // true

for (const a of s){
    console.log(a); // false 1 '1'
}

s.forEach( (a) => {
    console.log(a); // false 1 '1'
})

s.delete(2);
s.clear();

// 배열에 있는 중복제거할 때 set을 사용하면 좋다
const arr = [1, 2, 3, 2, 3, 5, 2];
const s2 = new Set(arr);
console.log(s2); // Set(4) { 1, 2, 3, 5 }
const s3 = Array.from(s2); // 다시 배열로 만들기
console.log(s3); // [ 1, 2, 3, 5 ]