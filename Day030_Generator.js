/* Generator : 함수의 실행을 중간에 중단했다가 재개 가능한 기능
    // iterable
        // Symbol.iterable 메소드가 있음, 이 메소드는 iterator를 반환해야 함
        // generator의 symbol.iterable 값은 자기 자신이다
            // a[Symbol.iterator]() === a; => true
            // -> for~of 문 사용 가능
    // iterator
        // next 메소드를 가지고 next는 value와 done 속성 객체를 반환
        // 작업 완료시 done은 true
    // 값을 미리 만들어두지 않음
        // while(true)문(무한반복)의 사용 가능
    //
*/

function* fn() {
  // * : generator 생성방법
  try {
    console.log(1);
    yield 1; // yield : 멈추는 지점
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
  } catch (e) {
    console.log(e);
  }
} // generator 객체 반환

const a = fn();

// generator 메소드
// 1. next
a.next(); // 가장 가까운 yield를 만날 때까지 실행, 반환된 객체 프로퍼티 : value, done
// value : yield 오른쪽의 값(없으면 undefined), done : 함수 코드가 끝났는지
// 계속해서 사용할 때마다 다음 yield까지의 함수 실행
// return 이후 : done 상태가 true가 된다, 이후에도 실행 시 value는 undefined

// 2. return
a.return("END"); // 즉시 Done 속성 값이 true가 된다

// 3. throw
a.throw(new Error("err")); // 즉시 done 속성값 true, value : undefined

// next 메소드 활용 예제
function* Next_() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "두번째 숫자를 입력해주세요";
  console.log(num2);

  return num1 + num2;
}
const n = Next_();

Next_.next(); // value : "첫번째 숫자를 입력해 주세요", done : false
Next_.next(2); // num1에 2가 저장됨
Next_.next(4); // num2에 4가 저장됨
// value : 6 (2+4), done : true ( 더이상 yield가 존재하지 않음 )



// yield*의 이용
function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
}

function gen2(){
    yield "Hello,";
    yield* gen1();
    yield "!";
} // for~of와 마찬가지로 done이 true가 될 때까지 실행