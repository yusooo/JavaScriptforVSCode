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