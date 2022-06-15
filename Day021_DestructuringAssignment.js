// 구조 분해 할당 : 배열이나 객체의 속성을 분해해 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
let [x, y] = [1, 2];
console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;
// = let user1 = users[0];
// = let user2 = users[1];
// = let user3 = users[2];
console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'

let str = "Mike-Tom-Jane";
let [users1, users2, users3] = str.split('-'); // split 메소드를 통해 배열을 분해
console.log(users1); // 'Mike'
console.log(users2); // 'Tom'
console.log(users3); // 'Jane'

// 기본값
var [a, b, c] = [1, 2]; // c에는 undefined값이 들어간다
var [a=3, b=4, c=5] = [1, 2]; // 값이 undefined가 될 경우 기본값 사용

// 일부 반환값 무시
let [hello1, , hello2] = ['Mike', 'Tom', 'Jane', 'Tony']; // 공백칸 무시로 인해 Tom은 건너뜀
console.log(hello1); // 'Mike'
console.log(hello2); // 'Jane'

// 바꿔치기
let al = 1;
let be = 2;
[al, be] = [be, al];


// 객체 구조 분해
let use = {names : 'Mike', ages : 30};
let {names, ages} = user;
// = let names = user.names;
// = let ages = user.ages;
console.log(names); // 'Mike'
console.log(ages); // 30
// 배열과는 달리 순서를 바꿔도 상관 X

// 새로운 변수 이름으로 할당
let {names : userName, ages : userAge} = user;
console.log(userName); // 'Mike'
console.log(userAge); // 30

// 기본값
var {namex, agex, genderex} = user; // gender값은 undefined
let {namex, agex, genderex = 'male'} = user; // user에 gender값이 없으므로 기본값 undefined 출력
// 만약 user에 gender값이 있다면 그 값을 출력