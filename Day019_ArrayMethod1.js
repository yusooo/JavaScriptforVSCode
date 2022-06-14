// 배열 메소드

let arr = [1, 2, 3, 4, 5];


// arr.splice(n,m) : n부터 m개의 특정 요소 지우기
arr.splicce(1,2); // arr = [1, 4, 5];

arr.pop();
arr.push(2, 3, 4, 5);

// arr.splice(n,m,x) : n부터 m개의 특정 요소를 지우고 추가
arr.splice(1, 3, 100, 200); // arr = [1, 100, 200, 5];
// m에 0을 넣으면 아무것도 지우지 않고 추가

for(let i=0;i<3;i++) arr.pop();
arr.push(2, 3, 4, 5);

// arr.splice() : 삭제된 요소 반환
let result = arr.splice(1, 2);
console.log(arr); // 1, 4, 5
console.log(result); // 2, 3

// arr.slice(n, m) : n부터 m까지 반환
// arr.concat(arr2, arr3, ...) : 합쳐서 새 배열 반환
// arr.forEach(fn) : 배열 반복
let arr2 = ["Mike", "Tom", "Jane"];
arr.forEach((name1, index) => {
    console.log(`${index + 1}. ${name1}`);
})

// arr.indexOf / arr.lastIndexOf 
// arr.indexOf(n) : 배열 안의 n값의 인덱스를 찾는다.
// arr.indexOf(n, m) : 배열 중 m번째 인덱스부터 탐색해 n값을 찾는다.
// arr.lastIndexOf(n) : 끝에서부터 n을 찾는다.

// arr.includes() : 포함하는지 확인

// arr.find(fn) / aff.findIndex(fn)  : 찾는다는 의미는 동일하지만 복잡한 연산을 위해 함수 가능
// 첫 true만 반환, 없으면 undefined / -1 반환
// ex ) 미성년자 찾기
let userlist = [
    { name : "Mike", age: 30},
    { name : "Jane", age: 27},
    { name : "Tom", age: 10},
];
const results = userlist.findIndex((user) => {
    if (user.age<19){
        return true;
    }
    return false;
})
console.log(result);

// arr.filter(fn) 만족하는 모든 요소를 배열로 반환
const arr3 = [1, 2, 3, 4, 5, 6];
const resultss = arr.filter((item) => {
    return item % 2 === 0;
});
console.log(resultss);

// arr.reverse() : 역순으로 재정렬
// arr.map(fn) :  함수를 받아 특정 기능을 수행하고 새로운 배열을 반환
let newUsrList = userlist.map((user, index) => {
    return Object.assign({}, user, {
        id : index + 1,
        isAdult: user.age > 19,
    });
});
console.log(newUserList);
console.log(userlist);

// arr.join() : 문자열 합하기
let helloMyName = ["안녕", "나는", "철수야"];
let newresult = helloMyName.join();
console.log(newresult); // 안녕,나는,철수야 출력
newresult = helloMyName.join("  ");
console.log(newresult); // 안녕  나는  철수야 출력

// arr.split("") : 문자열 나누기
let username = "Mike,Jane,Tome,Tony";
let namere = username.split(",");
console.log(namere); // "Mike", "Jane", "Tom", "Tony" 출력
username = "Hello, My name is Mike.";
namere = username.split(""); // 빈 문자열
console.log(namere); // "H", "e", "l", "l", "o", ",", " ", "M", ..., "e", "." 출력 (각 문자별로 끊어 출력)

// arr.isArray() : 배열인지 확인
// typeof의 경우 일반 객체와 배열 모두 객체로 판단하고 반환하므로 배열 확인시 isArray()로 확인