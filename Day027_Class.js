// 클래스

class User {
  constructor(name, age) {
    // constructor : 객체 만드는 생성자 메소드
    this.name = name; // 객체 초기화, 인수 넘겨받기 가능
    this.agee = age;
  }
  showName() {
    // 클래스 내의 메소드 : 프로토타입에 저장
    console.log(this.name);
  }
}

User.prototype.showName2 = function () {
  console.log(this.name);
}; // 문제 X

const tom = new User("Tom", 19); // 클래스의 경우 New 연산자 없이 동작 불가

User.prototype.showName = function () {
  console.log(this.name);
};

// 상속
// extends

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("stop!");
  }
}

class BMW extends Car {
  park() {
    console.log("PARK");
  }
}
const z4 = new BMW("Blue");

// 메소드 오버라이딩 method overriding
// 동일한 이름으로 메소드 작성시 덮어씀
// 부모 메소드와 동일한 이름 사용을 원할 시 super 사용
class Audi extends Car {
  stop() {
    super.stop();
    console.log("OFF");
  }
}

// 오버라이딩 overriding
// 생성자constructor 오버라이딩

class mercedes extends Car {
  constructor(color) {
    // color값이 undefined가 나오지 않기 위해 동일한 인수를 넘겨줄 것
    super(); // 부모 클래스 호출
    this.navigation = 1; // constructor에서 this 사용 전에 반드시 super 사용해 부모constructor 호출
    // 자식 클래스의 경우 빈 객체 만들기를 건너뛰기 때문
  }
  park() {
    console.log("PARK");
  }
}
