// 반복문 : 동일한 작업을 여러번 반복

// for

// while

// do..while
// do{
//       코드;
//     i++;
// }while(i<10)

// break(멈추고 빠져나옴), continue(멈추고 다음 반복으로 진행)

// switch문 : case가 다양한 경우에 사용
// switch (key) {
//   case value:

//   case value2:
//     break;

//   default:
//     break;
// }

// 전역변수, 지역변수

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
