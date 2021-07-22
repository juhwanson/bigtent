// String

// 안에 작은따옴표를 쓸 경우, 큰 따옴표를 감싸는게 좋고
// 안에 큰 따옴표를 쓸 경우, 작은 따옴표로 감싸는 게 좋음
// 백틱(`)은 안에 ${}를 사용할 때 써야 함

// 백틱의 장점
// 1)따옴표로 할려면 \n을 써야하는데 백틱은 여러줄을 쓸수 있음.

// 문자열 길이 구하기
// 변수명.length

// 문자열 특정 위치 접근
// 변수명[인덱스]
// 단 한글자만 바꾸는건 허용 되지 않음!!

// toUpperCase() / toLowerCase()
// 영어의 경우 대소문자 변경

// str.indexOf(text) : 문자를 인수로 받아 특정 문자가 몇번째 인덱스에 위치하는지 반환(첫번째 인덱스만 반환)
// 만약 찾는 문자가 없다면 -1을 반환함
// 주의할 점 : 인덱스가 0으로 반환되면 false가 되서 실행이 안됨.
// 해결 방안 : desc.indexOf('Hi') >-1로 조건을 주면 됨.
// let desc = "Hi guys. Nice to meet you.";
// if(desc.indexOf('Hi')){
//     console.log('Hi가 포함된 문장입니다.');
// }

// str.slice(n,m) : 슬라이싱 n부터 m까지 문자열 반환(m은 없는 경우 끝까지)
// str.substring(n,m) : 슬라이싱 n부터 m까지 문자열 반환(다른점 : n과 m을 바꿔도 동작함)
// str.substr(n,m) : n부터 m개를 슬라이싱

// str.trim() : 앞 뒤 공백 제거

// str.repeat(n) : 문자열을 n번 반복

// 문자열 비교 : 문자열을 10진수으로 변환 할 수 있음
// "a".codePointAt(0); //97
// 만약에 문자의 10진수를 안다면 String.fromCodePoint(십진수);
// 중요!! 알파벳은 대문자보다 소문자가 십진수가 크다.

// str.includes("문자") 문자가 있는지 없는지 판단

// Array

// arr.splice(시작, 갯수) : 특정 요소 지움
// arr.splice(시작, 갯수, 추가할 배열들) : 특정 요소 지우고 [사이에] 추가
// 꿀팁 : 특정 위치에 추가하는 것도 할 수 있음
// 예) arr.splice(1,   0, 추가할 문자열 ) : 인덱스 1 앞에 문자열 추가
// 삭제된 요소는 반환!!!
// let arr = [1,2,3,4,5];
// let result = arr.splice(1,2);
// clg(arr); // [1,4,5]
// clg(result); // [2,3]

// arr.slice(n,m): n부터 m까지 반환

// arr.concat(arr2, arr3) : 합쳐서 새배열로 반환
// let arr = [1,2];
// arr.concat([3,4]); // [1,2,3,4]
// arr.concat([3,4],[5,6]); // [1,2,3,4,5,6]
// arr.concat([3,4],5,6); // [1,2,3,4,5,6]

// arr.forEach(fn) : 배열 반복

// let users = ['Mike', 'Tom', 'Jane'];
// users.forEach((item, index, arr) =>{});
// 최신 문법
// const users = ['Mike', 'Tom', 'Jane'];
// users.forEach((item, index, arr) => {});
// item : 해당 요소 : Mike, Tom, Jane
// index : 0, 1,2
// arr = 해당 배열 자체

// arr.indexOf / arr.lastIndexOf
// arr.indexOf()는 발견하면 해당 요소의 인덱스 반환 없으면 -1을 반환
// let arr = [1,2,3,4,5,1,2,3];
// arr.indexOf(3); //2
// arr.indexOf(3,3); // 두번째는 시작 위치를 나타냄 //7
// 끝내서부터 탐색하고 싶으면 arr.lastIndexOf()

// arr.includes() : 포함하는지만 판단
// arr.find(fn)/ arr.findIndex(fn)
// 함수를 반환할 수 있음
// arr.find(fn) : 첫번째 tru값만 반환하고 끝. 없으면 undefined을 반환
// arr.findIndex(fn) : 해당 인덱스 반환 없으면 -1반환

// const arr = [1, 2, 3, 4, 5];

// const result = arr.find(item => {
//   return item % 2 === 0;
// });
// console.log(result);

// arr.filter(fn) : 만족하는 모든 요소를 배열로 반환

// const arr = [1, 2, 3, 4, 5];

// const result = arr.filter(item => {
//   return item % 2 === 0;
// });
// console.log(result);

// find와 filter의 차이 find는 하나 찾으면 끝이지만, filter는 다 찾아 준다.

// arr.reverse(): 역순으로 재정렬

// arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

// let userList = [
//   {name:'Mike', age:30},
//   {name:'Jane', age:27},
//   {name:'Tom', age:10}
// ];

// let newUserList = userList.map((user, index) =>{
//   return Object.assign({}, user, {
//     id: index+1,
//     isAdult : user.age>19,
//   });
// });
// console.log(newUserList);

// join, split
// join : 리스트의 값을 하나로 통일해줌
// let arr =["안녕", "나는", "철수야"];
// let result = arr.join(기본값은 쉼표이고 따옴표 안에 구분자 넣어 주면 됌);
// console.log(result);

// split : 문자열을 배열로 나눠 주기
// const users = 'Mike,Jane,Tom,Tony';

// const result = users.split(','); // 쉼표를 기준으로 배열을 나눠주세요

// console.log(result);

// 배열과 객체는 둘다 object로 나온다 그럼 어떻게 구분하냐
// Array.isArray()

// arr.sort() :  배열 정렬
// 주의 : 배열 자체가 변경됨
// 인수로 정렬 로직을 담은 함수를 받음

// const arr = [27, 8, 5, 13];

// function fn(a, b) {
//   return a - b;
// }
// arr.sort(fn);

// console.log(arr);

// const arr = [27, 8, 5, 13];

// arr.sort((a, b) => {
//   return a - b; //
// });

// console.log(arr);

// 복잡한 함수 선언보다 Lodash(.sortBy(arr));
// const _ = require('lodash');

// const arr = [27, 8, 5, 13];

// const arr2 = _.sortBy(arr);
// console.log(arr2);

// arr.reduce()가 없다면...
// const arr = [1, 2, 3, 4, 5];

// let result = 0;
// arr.forEach(num => {
//   result += num;
// });
// console.log(result);
// arr.reduce()가 있다면..
// arr.reduce(): 인수로 함수를 받음
// (누적 계산값, 현재 값) =>{return 계산값}, 0(초기값);
// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((prev, cur) => {
//   return prev + cur;
// }, 0);// ,0은 없어도 상관 없음 그러나 초기값 즉, prev를 지정하고 싶다면 입력해도 됨
// 예) ,0 대신 ,100이면 100에서 1,2,3,4,5를 더해 115가 결과로 나온다.
// console.log(result);
// const userList = [
//   { name: 'Mike', age: 30 },
//   { name: 'Tom', age: 10 },
//   { name: 'Jane', age: 27 },
//   { name: 'Sue', age: 26 },
//   { name: 'Harry', age: 42 },
//   { name: 'Steve', age: 60 },
// ];

// const result = userList.reduce((prev, cur) => {
//   if (cur.age > 19) {
//     prev.push(cur.name);
//   }
//   return prev;
// }, []);

// console.log(result);
// 특정 조건을 검새해서 리스트로 만들거나, 합계를 낼때 용이함.
