// 생성자 함수 : 필요한 재료(매개변수)를 넣어주면 완성품(결과 객체)를 내놓는다

function User(name, age){ // 첫 글자는 대문자로 쓴다
    // this = {};
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    }
    // return this;
}

// new 연산자를 사용해서 호출
let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);
let user4 = new User('Han', 40);

user4.sayName()
