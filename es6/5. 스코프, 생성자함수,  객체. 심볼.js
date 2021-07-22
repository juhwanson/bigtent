// 변수 호이스팅
// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동

// 스코프
// var : 함수 스코프
// let, const : 블록 스코프

// 객체 리터럴
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

// Object.keys()
// 키가 배열로 변환

// Object.values()
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
