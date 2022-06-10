// 객체의 메소드와 this

// method : 객체 프로퍼티로 할당된 함수
// function 키워드 생략 가능

const user = {
    name : 'Mike',
    sayHello : function(){
        console.log(`Hello, I'm ${this.name}.`);
    }
}

// this 활용의 주의점 : 화살표함수로 메소드를 만들고 this를 사용하면 외부에서 가져오게됨
// 객체 메소드 작성 시 화살표함수 사용하지 말 것