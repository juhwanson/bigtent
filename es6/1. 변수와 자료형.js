/* eslint-disable symbol-description */
// 변수
// 문자는 늘 따옴표로 표기, 숫자는 그냥 표기
// 끝나면 ;으로 마무리

// 변수명 네이밍에는 예약어 금지
// 문자와 숫자, $, _ 사용 가능

// let과 const
// let : 선언은 한번, 재할당 가능
// const : 선언은 한번 재할당 안됨
// 주로 파이나 최대값, 생일 등 절대로 바뀌지 않는 값에 사용
// 바뀌지 않는 값이기 때문에 대문자로 표기하는 것이 좋음

// 자료형
// 1) 문자형
// cf. 백틱(`) : 문자열 내에 변수를 표현 할때 사용
// 문자형에서 가능한 사칙 연산 : 더하기
// 예 )
const name = 'John';
const message = `I 'm ${name}`;
console.log(message);

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
console.log(typeof 3);
console.log(typeof 3.14);
console.log(typeof 'xxx');
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());
// 주로 다른 개발자가 사용한 자료형 알아야 하거나 통신에 사용된 데이터 자료형 알아야 할 때 사용
