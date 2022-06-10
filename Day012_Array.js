// 배열 : 순서가 있는 리스트

let students = ['자바', '자바스크립트', 'C', 'C++'];
// index : 번호. 0부터 시작
// (배열 이름)(인덱스) = '배열 값'; -> 배열 값 수정
// console.log(배열 이름) -> 배열 값 전부 출력

// 배열은 온갖 것을 다 넣을 수 있다.

students.length // 배열의 길이
students.push('CSS') // 배열 끝에 요소 추가
students.pop() // 배열 끝 요소 제거
students.unshift('SQL'); // 배열 앞에 요소 추가
students.shift(); // 배열 앞에 요소 제거
// push 및 unshift의 경우 여러개 한 번에 추가 가능


// 배열의 주 사용 이유인 반복문
for(let index=0;index<students.length;index++){
    console.log(students[index]);
}


// for ... of 문
for(let index of students){ // for문보다 간단하지만 index를 얻을 수는 없다
    console.log(index);
}