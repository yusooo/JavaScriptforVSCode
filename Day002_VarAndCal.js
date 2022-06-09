// 연산

const y = name1/2;
console.log(y)
// 출력결과 : NaN (=Not A Number)
// 숫자가 아닌 변수를 연산에 사용

// 변수

//booleanType
const tr = true;
const fal = false;

console.log(name1=='Mike')
console.log(age>40)

// null & undefined
let age; // undefined
let user = null; //값 존재 X

//--------------------------------//

// typeof 연산자

console.log(typeof 3);
console.log(typeof name1);
console.log(typeof null); // 객체형으로 나오지만 null=/=객체
// 변수 타입을 알려줌

const be = "이다.";
console.log("나는 "+name1+be) // 합하기 가능