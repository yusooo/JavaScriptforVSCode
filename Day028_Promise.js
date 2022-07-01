// 프로미스Promise

// 콜백함수
const pr = new Promise((resolve, reject) => {
  // resolve = 성공, reject = 실패
  // code
});
// 반환 객체 프로퍼티 : state & result
// state : pending(대기), resolve(value)->fulfilled(이행됨), reject(error)-> rejected(거부됨)
// result: undefined(), value(성공), error(실패)

// 예제 1 : 성공 사례
const pro_solved = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});
// state값의 변화 = 초기 : pending -(3초)-> fulfilled
// result값의 변화= 초기 : undefined -(3초)-> 'OK'

// 예제 2 : 실패 사례
const pro_error = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error..."));
  }, 3000);
});
// state값의 변화 = 초기 : pending -(3초)-> rejected
// result값의 변화= 초기 : undefined -(3초)-> 'error'

// result & reject의 처리
pr.then(
  function (result) {}, // 이행 시 실행
  function (err) {} // 거부 시 실행
);

const shop = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});
pr.then(
  function (result) {
    console.log(result + "가지러 가자.");
  },
  function (err) {
    console.log("다시 주문해 주세요...");
  }
);

const fs1 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};
const fs2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("xxx");
    }, 2000);
  });
};
const fs3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 3000);
  });
};
// catch로 동일하게 동작 가능, 가독성 더 좋음
pr.then(function (result) {})
  .catch(function (err) {})
  .finally(
    // 최종적으로 무조건 실행됨
    function () {
      console.log("--- 주문 끝 ---");
    }
  );

// 프로미스 체이닝 Promises chaining
console.log("시작");
fs1()
  .then((res) => fs2(res))
  .then((res) => fs3(res))
  .then((res) => console.log(res))
  .catch(console.log)
  .finally(() => {
    console.log("끝");
  });

// Promise.all : 한 번에 실행 => 시간 절약
// 중간에 reject 발생 -> 어떤 데이터도 얻을 수 X
// 이분법 : 전부 보여주거나 아예 안 보여주거나!
console.time("x"); // 시간 측정
Promise.all([fs1(), fs2(), fs3()]).then((res) => {
  console.log(res);
  console.timeEnd("x");
}); // fs1, fs2, fs3이 끝난 다음 then 부분을 실행

// Promise.race : 중간에 하나라도 끝나면 바로 보여줌
Promise.race([fs1(), fs2(), fs3()]).then((res) => {
  console.log(res);
});
