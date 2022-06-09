
// alert   알려줌
// prompt  입력받음
// confirm 확인받음

alert(name1) // 사용자에게 알림창을 띄울 수 있다.

const alpha = prompt("이름을 입력하세요.", "홍길동"); // 뒤의 "" 내의 인수는 디폴트값
alert("환영합니다, "+alpha+"님.");
alert(`안녕하세요, ${alpha}님.`); // 둘 다 사용 가능
// alert에서 취소를 누를 경우 null값이 들어가게 된다.

const isStudent = confirm("당신은 학생인가요?");

console.log(isStudent)
// 확인 or 취소. 확인 시 true, 취소 시 false 값이 뜬다.
// 사용자 액션을 한 번 더 확인할 때 자주 사용.
// boolean 값과 함께 이용이 가능할 것 같다.


// 위 메소드의 단점
// 1. 스크립트 일시 정지
// 2. 스타일링 불가능