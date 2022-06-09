// 형변환

const mathScore = prompt("수학 점수를 입력해주세요."); // prompt 형으로 입력받을 경우 무조건 문자형으로 인식
const engScore = prompt("영어 점수를 입력해주세요."); // ``
const result = (mathScore + engScore) /2; // ("문자형" + "문자형") / (숫자) => (문자형a)(문자형b)를 숫자로 변환해 계산 (묵시적 형변환)

console.log(result) // 결론 : 이상한 값 출력

// 다음 메소드를 통해 형변환을 할 수 있다

String() // 괄호 안의 값을 문자형으로 변환
Number() // 괄호 안의 값을 숫자형으로 변환 (문자는 변환 X (NaN 출력), 논리값 true는 1 false는 0으로 변환)
// Number(null) -> 0 , Number(undefined) -> NaN
Boolean() // false가 되는 경우 : 숫자 0, 빈 문자열, null, undefined, NaN / 이외 모두 true
// Boolean(0) -> false / Boolean('0') -> true
// Boolean('') -> false / Boolean(' ') -> true