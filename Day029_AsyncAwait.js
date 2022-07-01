// async
// : 체인 형식보다 가독성 상향

async function getName() {
  return "Mike";
} // async 키워드 -> 항상 Promise 반환
console.log(getName()); // Promise 출력
getName().then((name) => {
  console.log(name); // Mike
});

async function getNameA() {
  return Promise.resolve("Tom"); // 출력 시 값 그대로 사용
} // 함수 내부에서 예외 발생 시 rejected된 값이 사용됨
getNameA().then((name) => {
  console.log(name);
});

async function getNameB() {
  throw new Error("error...");
}
getNameB().catch((name) => {
  console.log("xxx...");
});

// await
// async 함수 내부에서만 사용 가능
async function showName3() {
  const result = await getName("Mike");
  console.log(result);
}
console.log("시작");
showName3(); // 시작 후 1초 뒤에 출력 : getName에서 resolved된 값을 기다렸다가 출력

// 예제
const f1 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      //res("2번 주문 완료");
      rej(new Error("err..."));
    }, 3000);
  });
};
const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};
console.log("시작");
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1); // 에러 발생 시 중간에 멈춤 -> try~catch 문으로 보완
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();
