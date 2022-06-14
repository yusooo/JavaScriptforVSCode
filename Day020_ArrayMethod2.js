// 배열 메소드 2편

// arr.sort()
// 배열 재정렬 / 배열 자체가 변경됨에 주의
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);
arr = ["a", "c", "d", "e", "b"];
arr.sort();
console.log(arr);
arr = [27, 8, 5, 13];
arr.sort();
console.log(arr);   // 문제 발생 : 값을 문자열로 취급
arr = [27, 8, 5, 13]; // 문제 해결하기 : .sort()는 함수로 매개변수를 받을 수 있음
function fn(a, b){
    return a-b;
}
arr.sort(fn);
console.log(arr);
// 혹은 이렇게 해결
arr.sort((a,b) => {
    return a-b;
});
console.log(arr);

// 보통 Lodash 라이브러리 사용
// .sortBy(arr);
// https://lodash.com

// arr.reduce : 인수로 함수를 받는다
let arr1 = [1, 2, 3, 4, 5];
let result = 0;
arr.forEach(num => {
    result += num;
});
console.log(result);

result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0);
console.log(result);