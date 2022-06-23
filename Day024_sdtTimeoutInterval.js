// setTimeout : 일정 시간이 지난 후 함수를 실행

function fn(){
    console.log(3)
}
setTimeout(fn, 3000); // 매개변수는 (a,b)로 2개
// a : 실행할 함수
// b : 시간, 1000=1s

setTimeout(function(){
    console.log(3)
}, 3000);
// 위의 function fn ... setTimeout(fn, 3000)과 같음

// 인수가 필요할 경우 시간 뒤에 적는다
function showName(name){
    console.log(name);
}
setTimeout(showName, 3000, 'Mike'); // 매개변수 : (함수, 시간, 인수)

// clearTimeout(tId); -> 예정된 작업 제거

// tId 구하기
const tId = setTimeout(showName, 3000, 'Mike');



// setInterval : 일정 시간 간격으로 함수를 반복
// setTimeout과 사용법 동일
// 중간 취소는 clearInterval(tId);


// delay가 0이어도 현재 실행중인 함수 종료 이후에 스케줄링된 함수를 실행하므로 딜레이가 완전 0이 될 수는 없음