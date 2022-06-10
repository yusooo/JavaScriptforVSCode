// 함수

// function 함수명(매개변수){
//      실행할 내용
//}

function sayHello(HelloName){
    const HelloName = prompt("이름을 알려줄래요, 친구?");
    alert(`반가워요, ${HelloName} 친구!`);
}

function showError(){
    alert(`에러가 발생했습니다.`);
}



function Hi(name){
    let msg = `Hello`;
    if(name){
        msg += `, ${name}`;
    }
    else msg += `, Unknown User`;
    console.log(msg);
}   // msg는 지역변수이므로 외부에서 사용 불가능하다
    // 외부에서 접근하려면 외부에서 선언해 전역변수를 만들어야 한다
    // 지역변수와 전역변수의 이름이 동일할 때 지역변수가 전역변수보다 우선된다

function Error(){
    alert(`에러가 발생햇습니다`);
    return;     // return이 없거나 리턴값이 없으면 undefined 반환
}