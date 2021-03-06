// 함수 표현식 작성하기

// 이름이 없는 함수를 선언한 이후 변수에 할당하는 것
// 실행방식 등이 동일하다
//      함수 선언문의 경우 함수는 어디서든 호출 가능하다
//      사유 : 실행 전에 함수를 모두 선언해둠
//      함수 표현식에 경우 코드로 생성한 이후 호출 가능하다
let add = function(num1, num2){
    return num1+num2;
}

// 화살표 함수
let additional = (num, num3) =>{
    return num+num3;
} // 인수가 하나라면 괄호 생략 가능, 리턴값 하나라면 중괄호 생략 가능