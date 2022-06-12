// 문자열 메소드

// 문자열 표현하기 : "큰따옴표" '작은따옴표' `베틱`
// "영문 표현에 적합", 'html 코드에 적합', `변수 표현 가능`

// `` : 한 번에 여러줄 표현도 가능하다

// length : 문자열 길이
let desc = '안녕하세요'; 
desc.length // 5
length[3] // '하' (배열과 마찬가지로 각 글자는 인덱스를 가지며 0부터 시작한다)
// 배열과 달리 한 글자만 바꾸는 건 불가능 (각 글자는 const라고 생각하면 편할듯)

// toUpperCase() : 모든 영문을 대문자로 변환
// toLowerCase() : 모든 영문을 소문자로 변환

// str.indexOf(text) : 찾는 문자(열)의 첫 인덱스 반환, 존재하지 않으면 -1 반환
let desc1 = "Hi guys. Nice to meet you.";
desc1.indexOf('to'); // 14 : t가 14번째임
desc1.indexOf('man'); // -1
// text가 포함되었을 때 포함되었다는 문장을 출력하려면
if(desc1.indexOf('Hi')>-1){ // >-1이 없다면 인덱스가 0이라 false가 되므로 문장 출력 X
    console.log('Hi가 포함된 문장입니다.');
}

// str.slice(n,m) : n부터 m 까지의 문자열 반환
// m값이 없으면 문자열 끝까지, 양수면 그 숫자 직전까지, 음수면 끝에서부터 센다
let desc2 = "abcdefg";
desc2.slice(2) // "cdefg"
desc2.slice(0,5) // "abcde"
desc2.slice(2,-2) // "cde"

// srt.substring(n,m) : n과 m 사이 문자열 반환 / 음수는 0으로 인식
desc2.substring(2, 5) 
desc2.substring(5, 2) // 둘의 출력값은 같다

// str.substr(n,m) : n부터 시작해 m개의 문자를 가져온다
desc2.substr(2,4) //"cdef"
desc2.substr(-4,2) // "de"

// sub.trim() : 앞뒤 공백 제거
// str.repeat(n) : 문자열의 n번 반복

// 문자열 비교 : a>c => true
// "a".codePointAt(0) : a의 아스키코드값 출력
// String.fromCodePoint(97) : 97의 아스키코드 출력