// 클로저 Clousure : 함수와 렉시컬 환경의 조합 / 함수가 생성될 당시의 외부 변수를 기억

// 어휘적 환경 Lexical Environment
// 전역 Lexical 환경 : 프로그램의 시작과 동시에 변수 및 함수가 호이스팅된다
// 변수의 경우 초기화 X -> 사용 불가 / function의 경우 사용 가능
let one; // 사용해도 값이 undefined지만 사용은 가능
one = 1; // 초기화

function add0ne(num) {
    console.log( one + num );
}

add0ne(5); // 내부 Lexical 환경 생성 / 전역 Lexical 환경에 대한 참조를 갖는다
// 코드에서 변수를 찾는 순서 ; 내부 Lexical 환경 -> 없으면 외부 -> 없으면 전역

// Closure 이해하기
// 함수와 렉시컬 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억
// 생성 이후에도 계속 접근 가능

function makeAdder(x){
    return function(y){ // y를 가지고 있고 상위함수인 makeAdder의 매개변수 x에 접근 가능
        return x + y;
    }
}

const add3 = makeAdder(3);
console.log(add3(2)); // 5 // add3 함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

const add10 = makeAdder(10);
console.log(add10(5));
console.log(add10(5)); // 15
console.log(add3(1)); // 4 