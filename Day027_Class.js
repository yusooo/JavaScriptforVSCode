class User {
  constructor(name, age) {
    // constructor : 생성자 메소드
    this.name = name; // 객체 초기화, 인수 넘겨받기 가능
    this.agee = age;
  }
  showName() {
    // 클래스 내의 메소드 : 프로토타입에 저장
    console.log(this.name);
  }
}

const tom = new User("Tom", 19); // 클래스의 경우 New 연산자 없이 동작 불가

User.prototype.showName = function () {
  console.log(this.name);
};
