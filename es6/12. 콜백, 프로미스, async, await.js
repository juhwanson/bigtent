// Promise
// 기본 문법
// const pr = new Promise((resolve, reject)=>{
//  code
// });

// 판매자의 코드
// 예) const pr = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('Ok')
//   }, 3000)
// });

// 소비자의 코드
// pr.then(
//     function(result){
//     console.log(result+'가지러 가자.');
// }, //이행 되었을때 실행
//     function(err){
//     console.log('다시 주문해주세요..');
// } // 실패했을때 실행
// );

// .then 에서 .then .catch로 변경
// pr.then(
//       function(result){},
//       function(err){}
// );

// 변경 후!!
// .pr.then(
//       function(result){}
// ).catch(
//       fuction(err){}
// )
// 이행이 거부됐든 실행됐든 .finally는 실행

// .pr.then(
//       function(result){}
// ).catch(
//       fuction(err){}
// ).finally(
//           function(){
//             console.log('----주문 끝------');
//           }
// )

// 예제 : 콜백함수의 지옥!!
// const f1 = callback => {
//   setTimeout(function () {
//     console.log('1번 주문 완료');
//     callback();
//   }, 1000);
// };

// const f2 = callback => {
//   setTimeout(function () {
//     console.log('2번 주문 완료');
//     callback();
//   }, 3000);
// };

// const f3 = callback => {
//   setTimeout(function () {
//     console.log('3번 주문 완료');
//     callback();
//   }, 2000);
// };

// console.log('시작'); // 콜백함수의 지옥
// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log('끝');
//     });
//   });
// });

// 예재 : 프로미스로 구현!
// const f1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('1번 주문 완료');
//     }, 1000);
//   });
// };

// const f2 = message => {
//   console.log(message);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('2번 주문 완료');
//     }, 3000);
//   });
// };

// const f3 = message => {
//   console.log(message);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('3번 주문 완료');
//     }, 2000);
//   });
// };
// // 프로미스 체이닝
// console.log('시작');
// f1()
//   .then(res => f2(res))
//   .then(res => f3(res))
//   .then(res => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     console.log('끝');
//   });

// 만약 2번 주문을 rej("xxx"); 로 바꾼다면
// 1번 주문 실행하고 2번 에러 메세지 보내고 끝을 간당!!

// Promist.all([]) : 배열로 받고 한번에 실행되고 이행되면 값을 사용 할 수 있음
// Promise.all([f1(), f2(), f3()]).then(res => {
//   console.log(res);
// }); // 3개의 작업이 완료되어야 then이 실행

// 걸린 시간을 체크하고 싶다면
// console.time("x");
// Promise.all([f1(), f2(), f3()]).then(res => {
//   console.log(res);
//   console.timeEnd("x");
// }); // 3초 정도 걸림 반면에 원래 코드는 6초 정도 걸림
// Promise.all은 하나라도 실패하면 어떤 데이터도 얻지 못함!

// Promise.race([]) : 배열로 받고 하나라도 이행되면 값을 사용 할 수 있음
// Promise.race([f1(), f2(), f3()]).then(res => {
//   console.log(res);

// async, await
// 프로미스 체이닝보다 가독성이 좋아짐!!

// await는 async안에서만 사용되고 await 오른쪽에는 프로미스가 오고
// 프로미스가 처리될때까지 기다린다.

// async, await로 구현

// const f1 = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('1번 주문 완료');
//     }, 1000);
//   });
// };

// const f2 = message => {
//   console.log(message);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('2번 주문 완료');
//     }, 3000);
//   });
// };

// const f3 = message => {
//   console.log(message);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('3번 주문 완료');
//     }, 2000);
//   });
// };

// console.log('시작');
// async function order() {
//   const result1 = await f1();
//   const result2 = await f2(result1);
//   const result3 = await f3(result2);
//   console.log(result3);
//   console.log('종료');
// }
// order();

// rej가 발생하면 Promis는 catch를 썼는데, async-await는 Try_Catch문으로 해당 await를 감싸주면 된다.

// console.log('시작');
// async function order() {
//   try {
//     const result1 = await f1();
//     const result2 = await f2(result1);
//     const result3 = await f3(result2);
//   } catch (e) {
//     console.log(e);
//   }
//   console.log('종료');
// }
// order();

// 위의 같은 경우 2번이 실패라면 1번이 실행되고 종료 된다.

// Promise.all로 해보면

// console.log('시작');
// async function order() {
//   try {
//     const result =  await.Promise.all([f1(), f2(), f3()]);
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
//   console.log('종료');
// }
// order();
