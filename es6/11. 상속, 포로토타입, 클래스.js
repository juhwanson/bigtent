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
//   constructor(name, age) { // 생성자
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
// 첫째,객체는 for..in문으로 프로퍼티를 출력하면 필드랑 메소드 나 나오는데.
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
