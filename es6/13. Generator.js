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
