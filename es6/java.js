/* eslint-disable symbol-description */
// 변수
// 문자는 늘 따옴표로 표기, 숫자는 그냥 표기
// 끝나면 ;으로 마무리

// 변수명 네이밍에는 예약어 금지
// 문자와 숫자, $, _ 사용 가능

// 이벤트 핸들러 - 이벤트 핸들러는 'on'으로 시작
// const onClick = () => {};
// const onKeyDown = () => {};

// // 불린 반환 함수 - 반환 값이 불린인 함수는 'is'로 시작
// let isAvailable = false;

// (지역 변수 or private 변수)명은 '_'로 시작한다.
// let _privateVariableName;
// let _privateFunctionName;

// URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.

// 선언과 동시에 할당을 하는 변수 먼저 선언한다.
// Bad
// var foo;
// var bar;
// var qux;
// var i = 0;
// var j = 0;
// var len = this._array.length;
// var len2 = this._array2.length;
// var item;

// // Bad
// var i = 0, length = ary.length, j, k;

// // Good
// var i = 0;
// var j = 0;
// var len = this._array.length;
// var len2 = this._array2.length;
// var foo, bar, quux, item;

// let과 const
// let : 선언은 한번, 재할당 가능
// const : 선언은 한번 재할당 안됨
// 주로 파이나 최대값, 생일 등 절대로 바뀌지 않는 값에 사용
// 바뀌지 않는 값이기 때문에 대문자+스네이크 케이스로 표기하는 것이 좋음

// 자료형
// 1) 문자형
// cf. 백틱(`) : 문자열 내에 변수를 표현 할때 사용
// 문자형에서 가능한 사칙 연산 : 더하기
// 예 )
// const name = 'John';
// const message = `I 'm ${name}`;
// console.log(message);

// 2) 숫자형
// 정수나 실수도 가능하고, 사칙 연산이 가능하다

// 3) 불리언
// true, false

// 4)null
// 존재하지 않는다.

// 5)undefined
// 값이 할당되지 않았다.

// 6) Symbol

// typeof 연산자 : 자료형 알아 볼 수 있다.
//
// 키워드, 연산자와 다른 코드 사이에 공백이 있어야 한다.
// F
// console.log(typeof 3);
// console.log(typeof 3.14);
// console.log(typeof 'xxx');
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol());
// 주로 다른 개발자가 사용한 자료형 알아야 하거나 통신에 사용된 데이터 자료형 알아야 할 때 사용

// 대화 상자
// alert 알려줌, prompt 입력받음, confirm 확인받음

// alert()

// prompt()
// 입력하지 않고 취소하면 null값이 뜸

// confirm() : 확인버튼은 True, 취소는 False

// 형변환
// String() : 문자형으로 변환
// 사칙 연산시 주의
// prompt 입력은 무조건 String값으로 넘겨줌.

// Number() : 숫자형으로 변환
// Number("문자") --> NaN
// Number(null)-->0
// Number(undefined) -->NaN
// Number(0) : false
// Number("0") : true
// Number('') : false
// Number(' ') : false // 따옴표 상관없이 false

// Boolean() : 불리언으로 변환
// false : 숫자0, 빈문자열"", null, undefined, NaN

// 연산자
// %(나머지)
// 어떤 값이 들어와도 5를 넘기면 안돼
// 예) X %5 = 0~4사이의 값만 반환

// 거듭 제곱: 2**3;

// 비교연산자
//
// 키워드, 연산자와 다른 코드 사이에 공백이 있어야 한다.
// typeof str === 'string'(o)
// typeof str==='string'(x)
//
//= = : 값이 같은가? 결과는 True나 false만 반환
//= == : 값과 타입이 같은가?(일치 연산자)

// 조건문
//
// !!!! return문 바로 위는 한 칸 비워 놓는다.!!!!!!
//
// if (불리언){
//         ;
// }else if(불리언){
//     ;
// }else{}

// 반복문 : 동일한 작업을 여러번 반복

// for

// while

// do..while
// do{
//       코드;
//     i++;
// }while(i<10)
// [[do-while문 사용 시 while문 끝에 세미콜론을 쓴다.]]

// break(멈추고 빠져나옴), continue(멈추고 다음 반복으로 진행)

// switch문 : case가 다양한 경우에 사용
// switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.
// switch (value) {
//   case 1:
//     doSomething1();
//     break;

//   case 2:
//     doSomething2();
//     break;

//   case 3:
//
//     return true;

//   default:
//     throw new Error("This shouldn't happen.");
// }
// switch-case 사용 시 각 구문은 break, return, throw 중 한 개로 끝나야 하며
// default문이 없으면 // no default 표시를 해준다.

// 전역변수, 지역변수

// 암묵적 전역 변수를 사용하지 않는다.
// Bad
// function foo() {
//   let a = b = 0; // let a = (b = 0);와 같다. b가 암묵적 전역이 된다.
// }

// Good
// function foo() {
//   let a, b;
//   a = b = 0;
// }
// 함수 선언문 : 어디서든 호출
// function seyHello(params) {
//     실행할 문장 ;
// }

// 함수 표현식 : 이름이 없는 함수를 만들고 변수에 담음, 선언 이후에 호출 가능

// let sayHello = function (params) {
//         실행할 문장;
// }
// 화살표 함수
// 변경 전
// let add = function (num1, num2) {
//
//     return num1 + num2;
// }
// 변경 후 : funcion이 화살표로 바뀜, 중괄호가 리턴될것이기 때문에 리턴도 생략 가능
// let add = (num1, num2) => {
//           num1 + num2;
// }

// 리턴 문이 한줄이라면 중괄호 대신 소괄호 사용 가능
// let add = (num1, num2) =>(num1 +num2;)

// 리턴문이 한줄 이라면 괄호도 생략 가능
// let add = (num1, num2) =>num1 +num2;

// 인수가 하나라면 괄호도 생략 가능
// let sayHello = name =>`hello, ${name}`;
// 인수가 없는 함수의 경우 괄호를 생략 할 수 없다.
// let showError =() => {
//     alert('error!');
// }

// 리턴 전에 여러 실행 문장이 있다면 괄호 생략 할 수 없다.!
// let add = (num1, num2) => {
//     const result = num1 + num2;
//     return result;
// }

// 객체
// 중괄호로 구성되고 키와 값으로 구성, 프로퍼티 사이는 쉼표로 구분

// 접근, 추가: 점표기법, 대괄호 표기법
// 삭제 : delete 키워드 사용

// 프로퍼티 존재 여부 확인 : '프로퍼티' in 객체;
// const superman = {
//   name: 'clark',
//   age: 33,
// };

// console.log('age' in superman);

// for..in과 for..of 은 배열, 객체 둘다 가능

// for ... in 반복문
// for(let key in superman){
//     console.log(key);
//     console.log(superman[key]);
// }

// 반복문 : for ...of
// let day=['월','화','수'];

// for(let day of days{
//     console.log(day);
// })

// for..in과 for..of 차이점
// in은 인덱스가 나오고 of는 인덱스가 안나옴

// const iterable = [3, 5, 7];
// iterable.foo = 'hello';

// for (const key in iterable) { //인덱스가 나옴
//   console.log(key); // 0, 1, 2, "foo", "arrCustom", "objCustom"
// }

// for (const value of iterable) { // 값이 나옴
//   console.log(value); // 3, 5, 7
// }

// 메소드 : 객체 프로퍼티에 할당된 함수

// 배열 : 순서가 있는 리스트
// 배열의 길이 : 배열명.length;
// 배열 끝에 추가 : 배열명.push();
// 배열에서 마지막 요소를 제거하고 그 요소를 반환 : 배열명.pop();
// 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환: 배열명.shift();
// 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환: 배열명.unshift();

// 변수 호이스팅
// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동

// 스코프
// var : 함수 스코프
// let, const : 블록 스코프

// 객체 리터럴
// 객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않으며 콜론 뒤는 항상 공백을 강제한다.
// name: "Mike", age: 30 등...
// let user = {
//     name:'Mike',
//     age:30,
// }

// // 생성자 함수
// function User(name, age) { // 식별자 첫글자는 대문자
//   this.name = name;
//   this.age = age;
// }
// // 여러 객체 리터럴 만들기 좋음
// const user1 = new User('Mike', 30);
// const user2 = new User('Jane', 22);
// const user3 = new User('Tom', 17);

// Computed property(계산된 프로퍼티)
// const a = 'age';
// const user = {
//   name: 'mike',
//   [a]: 30,// 계산된 프로퍼티
// };

// 객체에서 사용할 수 있는 메소드
// Object.assign()
// 객체 복사 가능

// 잘못 된 예
// const user = {
//     name:'mike',
//     age: 30
// }
// const cloneUser = user; // 얕은 복사 즉 주소값만 복사됨

// 옳은 예
// const newUser = Object.assign({}, user); //객체는 초기값(추가하고 싶다면 프로퍼티 추가해서 생성, 같은 키면 덮어쓰기 됨
//                                                          ), user값이 들어감
// ES6 : const newUser = { ...user };

// 다른 예
// const user = {
//   name: 'Mike',
// };
// const info1 = {
//   age: 30,
// };
// const info2 = {
//   gender: 'male',
// };
// Object.assign(user, info1, info2);

// Object.keys(객체명)
// 키가 배열로 변환

// Object.values(객체명)
// 값이 배열로 변환

// Object.entries()
// 키와 값을 배열로 변환

// Object.fromEntries()
// 키/ 값 배열을 객체로

// 심볼 [유일한 식별자]
// const a = Symbol(); //new를 붙이지 않는다.
// 유일성보장 : 일치 연산자 사용해서 같은 심볼이여도 false나옴

// 전역 심볼 : Symbol.for()
// 하나의 심볼만 보장받을 수 있음
// Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 심볼 공유
// const id1 = Symbol.for('id');
// const id2 = Symbol.for('id');
// id1 === id2; // true
// Symbol.keyFor('id1'); //생성할때 적어준 이름 알려줌 id

// 전역 심볼이 아닌 경우 decription 사용
// const id = Symbol('id입니다.');
// id.description; //"id 입니다."

// 숨겨진 Symbol key 보는 방법
// Object.getOwnPropertySymbols(user); //[Symbol(id)]

// Symbol을 포함한 객체의 모든 키 보는 방법
// Reflect.ownKeys(user); ["name","age",Symbol(id)]

// Number, Math

// toString()
// 기능 : 숫자를 문자열로 바꿔줌
// const num = 10;
// num.toString(); // "10"
// num.toString(2); // "1010" 2진수로 변경
// const num2 = 255;
// num2.toString(16); // "ff" 16진수로 변경

// Math 내장 객체

// Math.PI;
// 파이 값을 구해줌

// Math.ceil() : 올림(숫자와 상관없이 실수를 정수로 올림)
// Math.floor() : 내림

// const num1 = 5.1;
// Math.floor(num1) // 5
// Math.ceil(num1) // 6

// Math.round() //반올림

// .toFixed(원하는 자리수 입력) 소수점 자릿수
// 예) let userRate = 30.1234;
//     userRate.toFixed(2);
// 주의 해야 할 점!!! - String으로 반환 So, Number()로 형변환 해줘야 함

// isNaN()
// let x = Number('x'); // NaN
// x == NaN //false
// x === NaN //false
// NaN == NaN //false
// isNaN(x) //true
// isNaN(3) //false

// parseInt() : 숫자로 형변환 VS Number()
// let margin = '10px';
// let redColor = 'f3';

// parseInt(margin); // 앞에서 부터 숫자만 형변환 하고 숫자만 리턴
// parseInt(redColor); // NaN // 첫글자부터 문자면 NaN반환
// Number(margin) // NaN
// parseInt("f3", 16); 16진수를 10진수로 변환해줌 : 243
// parseInt('11', 2) // 2진수를 10진수로 변환해줌 : 3

// toString()
// 기능 : 숫자를 문자열로 바꿔줌
// const num = 10;
// num.toString(); // "10"
// num.toString(2); // "1010" 2진수로 변경
// const num2 = 255;
// num2.toString(16); // "ff" 16진수로 변경

// parseFloat() : farseInt()와 동일하지만 부동 소수점까지 반환해줌.

// Math.random() : 0~1사이 무작위 숫자 생성
// 만약 1~100까지 임의의 숫자를 뽑고 싶다면?
// Math.floor(Math.random()*100)+1
// 만약 0~100까지 구하고 싶다면 : +1을 빼주면 됨

// Math.max() / Math.min() - 배열에서는 사용 할 수 없음.
// 참고 배열에서 최소 최대값 찾으려면 비교해서 구해야 함!
// 괄호 안에 숫자 중 최대값, 최소값을 구할수 있음.
// Math.max(1,4,-1,5,10); //10
// Math.min(1,4,-1,10); // -1

// Math.abs() : 절대값을 구해준다.
// Math.pow(n, m) : 제곱(n의 m승)
// Math.sqrt() : 괄호 안의 값을 루트를 씌워 계산 즉, 제곱근을 구해줌

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

// arr.slice(n,m): n부터 m까지 반환[값은 사라지지 않음]

// arr.concat(arr2, arr3) : 합쳐서 새배열로 반환
// let arr = [1,2];
// arr.concat([3,4]); // [1,2,3,4]
// arr.concat([3,4],[5,6]); // [1,2,3,4,5,6]
// arr.concat([3,4],5,6); // [1,2,3,4,5,6]

// arr.forEach(fn) : 배열 반복

// let users = ['Mike', 'Tom', 'Jane'];
// const users = ['Mike', 'Tom', 'Jane'];
// users.forEach((item, index, arr) => {});
// item : 해당 요소 : Mike, Tom, Jane
// index : 0, 1,2
// arr = 해당 배열 자체

// arr.indexOf / arr.lastIndexOf [str]에서도 사용 가능!!!
// arr.indexOf()는 발견하면 해당 요소의 인덱스 반환 없으면 -1을 반환
// let arr = [1,2,3,4,5,1,2,3];
// arr.indexOf(3); //2
// arr.indexOf(3,3); // 두번째는 시작 위치를 나타냄 //7
// 끝내서부터 탐색하고 싶으면 arr.lastIndexOf()

// arr.includes() : 포함하는지만 판단
// arr.find(fn)/ arr.findIndex(fn)
// 함수를 반환할 수 있음
// arr.find(fn) : 첫번째 true값만 반환하고 끝. 없으면 undefined을 반환
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
//
//
//
//
//
//
// 정리
// Array.prototype.filter() : [주어진 함수의 테스트를 통과(조건식)]하는 모든 요소를 모아 새로운 배열로 반환합니다.
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// Array.prototype.forEach() : 주어진 함수를 배열 요소 각각에 대해 실행합니다.
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));
// for..of..와 같음!

// Array.prototype.map()
// 배열 내의 모든 요소 각각에 대하여 [주어진 함수를 호출한 결과]를 모아 새로운 배열을 반환합니다.
// const array1 = [1, 4, 9, 16];

// pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]
//
//
//
//

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

// function fn(a, b) { // 오름 차순 : 낮은 수부터 높은 수까지
//   return a - b;
// }
// arr.sort(fn);

// console.log(arr);

// const arr = [27, 8, 5, 13];

// arr.sort((a, b) => { // 내림 차순 : 높은 수부터 낮은 수까지
//   return b - a; //
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
// (누적 계산값(초기값), 현재 값) =>{return 계산값}, 0(초기값);
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

// 구조 분해 할당
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서
// 그 값을 변수에 담을 수 있게 하는 표현식

// 배열 구조 분해
// 예) let users = ['a','b','c'];
// let [user1, user2, user3] = users;
// 각각 user1, user2, user3에 변수로 할당 됨.

// 배열구조분해 : 기본값
// 예 let[a,b,c] = [1,2];
// 위의 경우 a,b까지는 값이 할당되지만, c는 undefined를 할당
// let [a=3, b=4, c=5] = [1,2]; // 기본값을 설정해 준것임.

// 배열 구조 분해 : 일부 반환값 무시
// let [user1, ,user2] = ['a','b','c','d'];
// 쉼표사이에 빈칸이 존재 그럼 user1에는 a가 할당되고, user2에는 c가 할당된다.

// 배열 구조 분해 : 바꿔 치기
// 없다면....
// let a = 1;
// let b = 2;
// 이때 새로운 공간에 a값을 일단 저장
// let c =a;
// a=b;
// b=c;
// 있다면..
// [a,b]=[b,a];

// 객체 구조 분해
// const user = { name: 'Mike', age: 30 };
// const { name, age } = user;
// console.log(name);
// console.log(age);

// 객체 구조 분해 : 새로운 변수 이름으로 할당
// const user = { name: 'Mike', age: 30 };
// const { name: userName, age: userAge } = user; //기존변수 : 새로운 변수, 로 사용!!!
// console.log(userName);
// console.log(userAge);

// 객체 구조 분해 : 기본값
// const user = { name: 'Mike', age: 30 };
// const { name, age, gender = 'Human' } = user; 키값에 =하고 기본값 지정!!
// console.log(name);
// console.log(age);
// console.log(gender);

// 나머지 매개변수, 전개 구문
// arguments : 함수로 넘어 온 모든 인수에 접근
//            함수내에서 이용 가능한 지역 변수
//            length / index
//            Array 형태의 객체
//            배열의 내장 메서드 없음(forEach, map)
// 예]
// function showName(name) {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }
// showName('a', 'b');

// 나머지 매개 변수
// function showName(...names) {
//   console.log(names);
// }
// showName(); // []
// showName('a'); // 'a'
// showName('a', 'b'); // ['a', 'b']

// 아무것도 들어가지 않을 경우 undefined이 아니라 빈 리스트가 반환됨!!

// 매번 전달 받는 수가 다른 경우라면?!
// function add(...numbers) {
//   let result = 0;
//   numbers.forEach(num => (result += num));
//   console.log(result);
// }
// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// forEach, reduce등을 사용 가능!

// user객체를 만들어 주는 생성자 함수를 만들어봅시다.
// function User(name, age, ...skills) { //전개구문은 맨 마지막에 해줘야 함!
//   this.name = name;
//   this.age = age;
//   this.skills = skills;
// }
// const user1 = new User('a', 30, 'a', 'b');
// const user2 = new User('q', 30, 'q', 'q');
// console.log(user1);
// console.log(user2);

// 전개구문 : 배열, 객체 가능

// 전개 구문 : 복제

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
// ! ! 클로저 : 함수와 렉시컬 환경의 조합, 함수가 생성될 당시의 외부 변수를 기억
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

// call , apply, bind
// 함수 호출 방식과 관계 없이 this를 지정할 수 있음.

// call
// 모든 함수에서 사용 할 수 있으며, this를 특정값으로 지정할 수 있음
// const mike = {
//   name: 'Mike',
// };
// const tom = {
//   name: 'Tom',
// };
// function showThisName() {
//   console.log(this.name);
// }
// showThisName(); // window.name
// showThisName.call(mike);

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }
// update.call(mike, 1999, 'singer');//call 첫번째 인자는 this를 지정
// console.log(mike);
// update.call(tom, 2002, 'teacher');
// console.log(tom);
// call은 매개 변수를 직접받지만 ,apply는 매개변수를 배열로 받는다.
// call에서는 배열을 넣을 경우 전개구문을 사용해야 한다
// const nums =[3,10,1,6,4];
// 예)const maxNum = Math.max.call(null, ...nums);

// apply
// update.apply(mike, [1999, 'singer']);//apply 첫번째 인자는 this를 지정
// console.log(mike);
// update.appy(tom, [2002, 'teacher']);// 인자는 배열로 입력
// console.log(tom);

// bind
// bind는 this를 지정해줌! 변수로 지정할때

// const user = {
//   name: 'Mike',
//   showName() {
//     console.log(`Hello, ${this.name}`);
//   },
// };
// user.showName();

// const fn = user.showName;
// fn(); // this를 잃어버림
// fn.call(user); // 첫번째 인자를 this로 인식
// fn.apply(user); // 첫번째 인자를 this로 인식

// const boundFn = fn.bind(user);
// boundFn(); // bind는 this를 지정해줌! 변수로 지정할때

// 외부 모듈과 내부 모듈을 구분하여 사용한다.
// 외부 모듈과 내부 모듈을 변수 참조할 때, 선언 사이에 공백을 두면 가독성이 좋아진다.
// 외부 모듈
// const lodash = require('lodash');
// const $ = require(jquery);
// const handlebars = require('handlebars');
// const d3 = require('d3');

// 내부 모듈
// const pluginFactory from '../../factories/pluginFactory';
// const predicate from '../../helpers/predicate';
// const raphaelRenderUtil from '../../plugins/raphaelRenderUtil';

// 상속, prototype

// 객체 내의 프로퍼티 확인 방법 : 객체.hasOwnProperty("key");
// 객체 내에 hasOwnProperty() 메소드가 없는데 어떻게 되지?
// 상속 받아서 그럼..
// 상속의 예
// const car = {
//   wheels: 4,
//   drive() {
//     console.log('drive..');
//   },
// };

// const bmw = {
//   color: 'red',
//   navigation: 1,
// };

// const benz = {
//   color: 'black',
// };
// const audi = {
//   color: 'blue',
// };

// bmw.__proto__ = car; // car의 프로퍼티를 상속받음. 검색하는 프로퍼티가 없다면 상위 카 객체에서 찾는다.
// benz.__proto__ = car;
// audi.__proto__ = car;

// const x5 ={
//   color:"white",
//   name:"x5",
// };
// x5.__proto__ = bmw; // 상속은 이어 질 수 있다.

// 주의!!
// for(p in x5){
//   console.log(p);
// } // x5 의 상속된것까지 다 출력해주지만
// Object.keys(x5); 혹은 Object.values(x5);는 현재 오브젝트의 값만 나옴. 상속된거는 안나옴

// 생성자 함수로 사용하면
// const Bmw = function (color) {
//   this.color = color;
// };
// Bmw.prototype.wheels = 4;
// Bmw.prototype.drive = function () {
//   console.log('drive..');
// };

// const x5 = new Bmw('red');
// const z4 = new Bmw('blue');

// instanceof() : 객체와 생성자를 비교 할 수 있음. 불리언으로 반환
// z4 instanceof Bmw; //true
// z4.constructor === Bmw; //true

// 만약에 객체안의 값을 수정하지 못하게 하려면??
// const Bmw = function(color){
//   const c = color;
//   this.getColor= function(){
//     console.log(c);
//   };
// };

// const x5 = new Bmw("red");
// x5.getColor();
// 변수와 this를 활용하면 됨!!

// class
// Object뿐 아니라 class에서도 상속이 된다.
// class User2 { // 클래스와 식별자
//   Constructor(name, age) { // 생성자 : 대문자 카멜케이스를 사용!
//     this.name = name;
//     this.age = age;
//   }

//   showName() { //메소드
//     console.log(this.name);
//   }
// }
// const tom = new User2('Tom', 19);

// 객체로 생성된 메소드는 프로퍼티 안에 메소드가 있고, 클래스로 생성된 함수는 프로토 안에 있다.
// 사용법은 동일..
// 만약에 객체에서 프로토로 메소드를 넣고 싶다면 : 메소드를 프로토타입(생성자함수)으로 넣어주면 된다.
// User.prototype.showName = function(){
//   console.log(this.name);
// }

// 클래스와 객체의 차이!!
// 첫째,객체는 for..in문으로 프로퍼티를 출력하면 필드랑 메소드 다 나오는데.
// 클래스는 필드만 나오고 메소드 안나옴.
// 둘째, 객체는 new를 쓰지 않아도 undefined으로 값을 반환해주지만, 클래스는 실행자체가 안됨

// 클래스에서 상속 : extends (VS 객체는 __proto__)

// 클래스 오버라이딩
// 자식 클래스에서 같은 식별자로 메소드 선언하고 그 안에 넣으면 오버라이딩 됨
// 만약 부모의 것을 상속하고 싶으면 super를 사용하면 됨!
// constructor(생성자)를 하위 클래스가 상속하고 싶으면
// constructor(){} 선언하고 안에 super(); 을 선언해 줘야 함!
// 선언했으면 부모클래스의 생성자 안에 필드 즉, 인자들을 자식 클래스에서 반환해줘야 함
// 예) constructor(color){ // 매개변수에 인자를 기록
//      super(color); // 부모클래스의 필드를 연결
//      this.navigation =1;) // 오버라이딩 한 필드
// }

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
//   return new Promise((resolve, rej) => {
//     setTimeout(() => {
//       resolve('3번 주문 완료');
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

// rej가 발생하면 Promis는 then, catch, fa를 썼는데, async-await는 Try_Catch문으로 해당 await를 감싸주면 된다.

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

// Generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능

// function* fn() {
//   console.log(1);
//   yield 1;
//   console.log(2);
//   yield 2;
//   console.log(3);
//   console.log(4);
//   yield 3;
//   return 'finish';
// }

// const a = fn();

// next() 메소드 사용
// a.next(); // 가장 가까운 yield문을 만날때까지 실행
// 반환된 객체는 {value: , done:(false/true)}

// Generator의 메소드 : next(), return(), throw()

// return() : next()메소드를 실행하다가 return()메소드를 실행하면
// 그 즉시 종료하고 done은 true로 바뀜

// throw() : next()메소드를 실행하다가 throw()메소드를 실행하면
// 그 즉시 에러를 반환하고 done은 true로 바뀜

// Generator
// Iterable
// - Symbol.iterator 메소드가 있다.
// - Symbol.iterator은 Iterator을 반환 해야 한다.

// Iterator
// - next 메서드를 가진다
// - next 메서드는 value와 done 속성을 가진 객체를 반환한다
// - 작업이 끝나면 done은 true가 된다.
// 배열, 문자열도 Iterator 포함

// function* fn(){
//   const num1 = yield "첫번째 숫자를 입력해주세요";
//   console.log(num1);

//   const num2 = yield "두번째 숫자를 입력해주세요.";
//   console.log(num2);

//   return num1 +num2;
// }
// const a = fn();

// 실행
// a.next(); // 실행
// a.next(4); // ()안에 num1값을 입력 후 실행
// a.next(6) // ()안에 num2값을 입력 후 실행, 리턴 값에 계산되고 done

// 값을 미리 만들지 않을 경우
// function* fn() {
//   let index = 0;
//   while(true){
//     yield index++;
//   }
// }
// const a = fn();
// yield* 을 이용(yield안에 yield)
// function* gen1() {
//   yield 'W';
//   yield 'O';
//   yield 'R';
//   yield 'L';
//   yield 'D';
// }

// function* gen2() {
//   yield 'Hello,';
//   yield* gen1();
//   yield '!';
// }
// console.log(...gen2()); // 구조 분해 할당
