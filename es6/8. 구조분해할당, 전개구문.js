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
