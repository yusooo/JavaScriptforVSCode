// 나머지 매개변수, 전개 구문

// 인수 전달
function showName(name){
    console.log(name);
}
showName('Mike'); // Mike를 매개변수로 하여 name 값에 전달
showName('Mike', 'Tom'); // 에러는 없음(개수제한X)
showName(); // undefined 출력

// 함수에 접근하기 : arguments / 나머지 매개변수

// arguments
// 함수로 넘어 온 모든 인수에 접근 ( 함수 내에서 이용 가능한 지역 변수 )
// length or index
// Array 형태의 객체
// 배열의 내장 메소드 X (forEach, map)
function showName1(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showName1('Mike', 'Tom'); // 2 \n 'Mike' \n 'Tom'

// 나머지 매개변수
function showName2(...names){
    console.log(names);
}
showName2(); // []
showName2('Mike'); // ['Mike']
showName2('Mike', 'Tom'); // ['Mike', 'Tom']

function add(...numbers){
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
    result = numbers.reduce((prev, cur) => prev + cur);
    console.log(result);
}
add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}
const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React");
const user3 = new User("Jane", 10, "English");
console.log(user1);
console.log(user2);
console.log(user3);


// 전개 구문 Spread syntax : 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// arr.push() / arr.splice() / arr.concat() 등을 쉽게 가능

// 전개 구문 Spread syntax : 복제
let arr = [1, 2, 3];
let arr3 = [...arr]; // [1, 2, 3]
let user = {name : 'Mike', age : 30};
let user0 = {...user};
user0.name = "Tom";
console.log(user.name); // "Mike"
console.log(user0.name); // "Tom" ; user에는 영향 X