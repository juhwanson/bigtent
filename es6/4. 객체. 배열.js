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
// 배열 끝에 요소 제거 : 배열명.pop();
// 배열 앞에 추가 : 배열명.shift(); - 여러개 입력 가능('','','');
// 배열 앞에 제거 : 배열명.unshift();
