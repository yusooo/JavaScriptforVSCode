// 반복문


// For
for(let i=0;i<10;i++){ // 초기값 지정, 조건 확인, 실행{실행할 내용}
    console.log(i);
}


// While
i=0;
while(i<10){
    console.log(i);
    i++;
}

// Do while
i=0;
do{
    i++;
    console.log(i);
    if(i==9) break; // 반복을 멈추고 반복문 탈출
    else if(i%7===0) continue; // 반복을 멈추고 다음 반복으로 넘어감
}while(true);


// Switch
switch(yourAge <10){
    case 1 :
        console.log("한 살 신생아!");
        break;
    case 2 :
        console.log("삑");
        break;
    case 3 :
        console.log("뒤뚱뒤뚱~");
        break;
    default :
        break;
}