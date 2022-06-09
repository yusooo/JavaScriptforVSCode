// 논리연산자


const yourName = prompt("이름을 입력해주세요!");
const yourAge = prompt(yourName+" 친구, 나이는 어떻게 되시나요?");

// And
if(yourName === 'Mike' && yourAge > 17){
    console.log('오, 안녕하세요! 안타깝게도 지금은 들어갈 수 없어요. 톰이 막아놨답니다!');
}

// Or
if(yourName === 'Tom' || yourAge === 17){
    console.log('환영해요, 친구!');
} else{
    console.log('미안해요, 친구. 들어갈 수 없어요.');
}

// Not
if(yourName != 'Jone'){
    console.log('안녕, 친구! 당신이 누군지는 모르겠지만, 누가 아닌지는 난 알죠.');
}

// 조합 순위 : && > ||

const gender = 'F';
if(gender === 'M' && yourName === 'Tim' || yourAge > 17){
    console.log('안녕!');
}