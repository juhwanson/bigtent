// 클로저

// 어휘적 환경(렉시컬 Environment)

// let one;
// one = 1;
// function addOne(num){
//   console.log(one+num);
// }
// addOne(5); // 여기에 도달 한 순간
// 전역 Lexical 환경, 내부 Lexical 환경이 생성됨
// 지금은 내부 렉시컬 환경이 전역 렉시컬 환경을 참조함
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add3 = makeAdder(3);
// console.log(add3(2));
// 전역 렉시컬 환경 -> makeAdder 렉시컬 환경 -> 익명함수 렉시컬 환경
//! ! 클로저 : 함수와 렉시컬 환경의 조합, 함수가 생성될 당시의 외부 변수를 기억
//            생성 이후에도 계속 접근 가능
// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const add3 = makeAdder(3);
// console.log(add3(2));
// const add10 = makeAdder(10);
// console.log(add10(5));
// console.log(add3(1));// 생성 이후에도 계속 접근 가능!!

// function makeCounter() {
//   let num = 0;         //은닉화 성공!!!

//   return function () {
//     return num++;
//   };
// }
// const counter = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// setTimeout / sernterval
// setTimeout : 일정 시간이 지난 후 함수를 실행
// setInterval : 일정 시간 간격으로 함수를 반복

// function fn() {
//   console.log(3);
// }
// setTimeout(fn, 3000); //함수, 일정 시간(밀리초)을 값으로 받음

// 한줄로 만들어 보면!!
// setTimeout(function(){console.log(3)}, 3000);

// 인수를 넣고 싶다면!
// function showName(name) {
//   console.log(name);
// }
// setTimeout(showName, 3000, 'mike');

// const tid = setTimeout(function(){console.log(3)}, 3000);
// clearTimeout(tid); // 해당 시간 되기 전에 종료.. 결국 실행 되지 않는다.

// setInterval
// function showName(name) {
//   console.log(name);
// }
// const tId = setInterval(showName, 3000, 'mike');

// setTimeout(function () {
//   console.log(2);
// }, 0);

// console.log(1); // 실행하는 순서 1 다음 2
// 왜 초기 시간이 0인데 왜 2가 먼저 시작하지 않는가?
// setTimeout은 4ms가 기본 딜레이임

//
