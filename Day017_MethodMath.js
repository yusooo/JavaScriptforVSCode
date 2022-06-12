// 숫자 및 수학 관련 메소드

// Number() : 문자열의 숫자를 숫자로 변환

// toString() : 10진수 -> 2진수 혹은 16진수로 나타낸 문자열
let num = 10;
num.toString(); // "10"
num.toString(2); // "1010"
let num2 = 255;
num.toString(16); // "ff"

// Math.ceil() : 올림
// Math.floor() : 내림

// Math.round() : 반올림

// 소숫점 몇 자리까지 나타내기
let user = 12.3456789;
Math.round((user*1000)/1000); // 12.345
user.toFixed(3); // 12.345
// 괄호 안에 0을 넣으면 정수, 부족하면 뒤에 0 넣는다
// toFixed는 반환형이 문자이므로 Number() 메소드랑 같이 쓰는 경우가 많다

// isNaN() : NaN인지 판단

// parseInt() : 문자열을 숫자로 변환 (정수값)
// 문자와 숫자가 섞여있을 경우 처음 숫자 부분만 떼어 변환 (Number는 이 때 NaN 값을 반환)
let margin = '10px';
parseInt(margin); // 10
Number(margin); // NaN

let redColor = 'f3';
parseInt(redColor); // NaN ? 숫자로 시작하지 않음
parseInt(redColor, 16); // 16진수로 변환

// parseFloat() : parseInt와 똑같이 동작하지만 얘는 부동소수점 반환

// Math.random() : 0~1 사이 무작위 숫자 생성
// 원하는 범위를 만드려면 Math.floor(Math.random()*최댓값)+최솟값

// Math.max() : 괄호 안의 인수 중 가장 큰 수를 반환
// Math.min() : 괄호 안의 인수 중 가장 작은 수를 반환
// Math.abs() : 절댓값 반환 
// Math.pow(a,b) : a의 b제곱
// Math.sqrt() : 제곱근