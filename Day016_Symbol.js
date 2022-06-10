// 심볼

const obj = {
    1 : '1입니다.',
    false : '거짓'
}
// property key : 문자형으로 반환


// symbol형은 유일성을 보장한다
const a = Symbol(); // new를 붙이지 않는다
const b = Symbol(); 
console.log(a===b); // false
console.log(a==b); // false

const id = Symbol('id'); // 키로 사용 가능
var user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'   // 세션아이디 등으로 활용 가능할 듯
}
Object.keys(user); // Object 메소드는 Symbol형은 건너뛴다

// Symbol형의 장점 : 원본 데이터를 건드리지 않은 채 속성 추가 가능

Symbol.for() // 전역심볼, 하나의 심볼만 보장받는다
// 없으면 새로 생성하지만 이미 있으면 가져온다
// Symbol은 원래 매번 다른 값을 생성하지만 .for 메소드는 생성 뒤 키를 통해 같은 Symbol을 공유
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
id1 === id2;   // true

// 키를 얻고 싶다면
Symbol.keyFor(id1) // "id"

// 전역심볼이 아닌 심볼의 키를 얻을 때
id.description;

// 숨겨진 Symbol key 보기
Object.getOwnPropertySymbols(user); 
Reflect.ownKeys(user); // 심볼 키 포함 모든 키를 알려준다