// 객체

const superman = {
    name : 'clark',
    age : 33,
}

// key : value로 구성됨

// 접근 : (객체이름).(key) or (객체이름)['key']
// 추가 : (객체이름).(key) = (value); or (객체이름)['key'] = (value);
// 삭제 : delete (객체이름).(key);

// 단축 프로퍼티

const hisname = 'clark';
const hisage = 33;

const heissuperman = {
    hisname : hisname,  // hisname만 써도 된다
    hisage : hisage,    // hisage만 써도 된다
    gender : 'male'
}
    // 존재하지 않는 프로퍼티를 찾으면 undefined 값이 나온다
    // in 연산자는 프로퍼티가 객체에 존재하는지를 boolean 값으로 반환해 확인해준다
    console.log("birthDay" in heissuperman) // false
    console.log("gender" in heissuperman) // true

// for ... in 반복문
for(let key in heissuperman){ // heissuperman에서 key를 찾을 때까지 반복
    console.log(key)
    console.log(superman.key)
}