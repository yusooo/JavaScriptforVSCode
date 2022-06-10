// 객체 메소드, 계산된 프로퍼티


//계산된 프로퍼티
let a = 'age';

var user = {
    name : 'Mike',
    [a] : 30 // age : 30, 변수 a값 이름으로 30을 넣는다
}

var user = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "Hello"
}       // 식 자체를 넣는 것도 가능



// 객체 메소드

// 객체 복제
var user = {
    name : 'Mike',
    age : 30
}

var newUSer = Object.assign({}, user); // newUser에 user를 복제해 넣는다
Object.assign({gender : 'male'}, user);
var user = {
    name : 'Mike'
}
var info1 = {
    age : 30,
}
var info2 = {
    gender : 'male',
}
Object.assign(user, info1, info2)

// 객체 프로퍼티의 키를 배열로 반환
Object.keys(user);

// value 배열 반환
Object.values(user);

// key/value 배열 반환
Object.entries(user);

// key/value 배열 객체로 반환
Object.fromEntries(user);