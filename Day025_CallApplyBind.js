// Call, Apply, Bind : 함수 호출 방식과 관계없이 this 지정 가능



// Call
// 모든 함수에서 사용 가능, this를 특정 값으로 지정 가능
const mike = {
    name: "Mike",
};
const tom = {
    name: "Tom",
};
function showThisName(){
    console.log(this.name);
}

showThisName(); // 아무것도 뜨지 않음 <- this = Window
showThisName.call(mike); // call 사용에서 this를 사용할 객체 넘김
// call의 첫번째 매개변수 : this를 사용할 값
showThisName.call(tom);

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
};

update.call(mike, 1999, 'singer');
console.log(mike);

update.call(tom, 2002, "teacher");
console.log(tom);

// Call 2번째 매개변수 ~ : 함수에서 사용할 매개변수

const nums = [3, 10, 1, 6, 4];
const maxNum = Math.max.call(null, ...nums);

// Apply
// 매개변수를 배열로 받는다는 점만 제외하면 call과 완전히 동일

update.apply(mike, [2006, "student"]);
console.log(mike);
update.apply(tom, [2004, "highschool_3rd"]);
console.log(tom);

const minNum = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4]);
console.log(minNum);

// Bind
// 함수의 this 값을 영구히 바꿈

const updateMike = update.bind(mike);
updateMike(1980, "police");
console.log(mike);


const user = {
    name: "Mike",
    showName: function(){
        console.log(`hello, ${this.name}`);
    },
};

user.showName();

let fn = user.showName;
fn(); // this 사용할 값 잃어 출력 X
fn.call(user);

let boundFn = fn.bind(user);
boundFn();