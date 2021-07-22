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

// parseFloat() : farseInt()와 동일하지만 부동 소수점까지 반환해줌.

// Math.random() : 0~1사이 무작위 숫자 생성
// 만약 1~100까지 임의의 숫자를 뽑고 싶다면?
// Math.floor(Math.random()*100)+1
// 만약 0~100까지 구하고 싶다면 : +1을 빼주면 됨

// Math.max() / Math.min()
// 괄호 안에 숫자 중 최대값, 최소값을 구할수 있음.
// Math.max(1,4,-1,5,10); //10
// Math.min(1,4,-1,10); // -1

// Math.abs() : 절대값을 구해준다.
// Math.pow(n, m) : 제곱(n의 m승)
// Math.sqrt() : 괄호 안의 값을 루트를 씌워 계산 즉, 제곱근을 구해줌
