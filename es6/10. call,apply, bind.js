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
