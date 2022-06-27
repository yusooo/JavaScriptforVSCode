// 상속과 프로토타입

const user = {
    name : 'Mike',
}
console.log(user.name) // "Mike"
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age')); // false
// hasOwnProperty는 어디서 왔는가?

// __proto__ <- 프로토타입 
// 객체에 프로퍼티가 있으면 그 곳에서 탐색 멈춤
// 없으면 프로토타입에서 프로퍼티를 찾는다

// 상속
const car = {
    wheels: 4,
    drive(){
        console.log("drive..");
    }
}
const bmw = {
    color: "red",
    navaigation: 1,
};
const benz = {
    color: "black",
};
const audi = {
    color: "blue",
};
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car; // 상속
console.log(bmw); // 출력 : {color: "red", navigation: 1}
// 입력 : bmw.wheels; -> 위 출력에서 wheels는 없었음에도 4 출력
// 객체 내에서 우선적으로 wheels 프로퍼티를 찾음 -> 찾기 불가능 -> 상속받은 프로토타입에서 찾음
const x5 = {
    color: "white",
    name: "x5",
};
x5.__proto__ = bmw; // 연속적인 상속 가능 : Prototype Chain이라 불린다

// hasOwnProperty 메소드 : 객체가 가진 프로퍼티만 반환 / 상속받은 값은 반환 X

const z4 = new bmw("blue");
z4.__proto__ = car; // 매번 쓰려니 불편!

bmw.prototype.wheels = 4;
bmw.prototype.drive = function(){
    console.log("drive..");
}; // 생성자 함수로 간편하게 만들 수 있다

// 더 간단하게 만들어보기
bmw.prototype = {
    // constructor : bmw // 수동으로 constructor 명시
    wheels: 4,
    drive(){
        console.log("drive..");
    },
    navigation: 1,
    stop(){
        console.log("STOP!");
    },
}; // 주의 : constructor는 사라짐 : 수동으로 constructor 명시할 경우 제외

// z4 : Bmw로 생성되었으므로 bmw의 인스턴스