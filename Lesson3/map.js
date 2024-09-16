const m = new Map();

m.set('a','b'); // set(키, 값)으로 Map에 속성 추가
m.set(3,'c') // 문자열이 아닌 값을 키로 사용 가능합니다
const d = {};
m.set(d,'e'); // 객체도 된다
m.set({a:'b'},{c:'d'}); // 키,값을 객체로

m.get('a');
m.get(d);

console.log(m.get('a')); // b
console.log(m.get(d)); // e
console.log(m.get({a: 'b'})); // undefined, 참조값이 달라서 안가져와진다. 변수만들어두고 그걸로 가져와야함
const obj = { key: 'key'};
m.set(obj,123);
console.log (m.get(obj)); //123

console.log(m); // Map(5) {
                //     'a' => 'b',
                //     3 => 'c',
                //     {} => 'e',
                //     { a: 'b' } => { c: 'd' },
                //     { key: 'key' } => 123
                //   }


m.size; // size로 속성 개수 조회
console.log(m.size); // 5

// 반복문
for (const [k,v] of m){ 
    console.log(k,v);
} // 속성 간의 순서도 보장된다

// forEach도 사용 가능하다, 결과는 위와 동일
m.forEach((v,k) => {
    console.log(k,v);
});

m.has(d); // has(키)로 속성 존재 여부를 확인한다
console.log(m.has(d)); // true

m.delete(d); // delete(키)로 속성을 삭제한다
console.log(m.has(d)); // false

m.clear(); // clear()로 전부제거한다
console.log(m.size); // 0

console.log(111111111111);
// WeakMap
// 객체가 더 이상 다른 곳에서 참조되지 않으면 가비지 컬렉터에 의해 자동으로 메모리에서 해제된다
// 객체만 키로 사용할 수 있다
// 실전적으로 객체는 그대로 두고 그 부가적인 정보를 추가하고 싶을 때 사용한다
const wm = new WeakMap();
let obj3 = {};
wm.set(obj3, '123');
console.log(wm.get(obj3));
obj3 = 'another'; // 이렇게 다른 값으로 바꿔주면 기본에 set 해줬던 wm.set(obj3, '123'); 값도 자동으로 가비지 컬렌팅되어 없어진다.
console.log(wm.get(obj3)); // undefined