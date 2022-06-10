// 변수 선언 : var

// var와 let의 차이점

// 1. var는 같은 변수를 여러 번 선언할 수 있다.
// 2. var는 선언 전에 변수를 사용할 수 있다. (호이스팅hoisting, 값은 호이스팅되지 않으므로 undefined된다)
// 2-1. let과 const도 호이스팅은 되지만 Temporal Dead Zone의 영향을 받으므로 할당 전에 사용이 불가능하다.
// 2-2. var는 선언과 동시에 초기화가 되지만 let은 선언과 초기화 단계가 분리되어 있다.
// 2-3. const는 선언과 초기화와 할당이 동시에 되어야 한다. (상수)
// 3. var : 함수 스코프, let&const : 블록 스코프
// 3-1. var로는 함수에서 선언 시 외부 사용만 불가능. if문 등의 안에서 선언 시 전역변수로 사용 가능.