// 연산

// 기본연산자는 C와 동일

// 비교연산자
// 반환형은 항상 boolean값
console.log(10>5) // true 출력
console.log(4.4 == 4.5) // false 출력

console.log(1 == "1") // true 출력, 동등 연산자
console.log(1 === "1") // false 출력, 일치 연산자

// 조건문 (if, for)
const age = prompt("친구의 나이를 알려줄래요?");
if(age>19){  // if문 괄호 내의 조건은 항상 boolean값으로 변환되어 판단된다.
    console.log('환영해요, 어른 친구.');
}
else if(age === 19){
    console.log('우리 친구, 1년만 더 기다려 보지 않을래요?');
}
else {
    console.log('미안해요, 어린이 친구는 들어올 수 없어요.');
}