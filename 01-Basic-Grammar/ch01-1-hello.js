var hello2 = '';
var hello = `안녕하세요. + ${hello2}`;
// document.body.innerText = hello;


//ch01.1 문장 Statement
// JS 코드 실행 단위
// 세미콜론(;)까지 하나의 문장
var book = '책';
// 가독성을 위해 들여쓰기 2칸 또는 4칸

// ch01.2 변수 Variable
// 값을 저장하는 영역
// 변수 선언 방법
// 콤마로 구분하여 다수 작성
var title = '책', age = 1;
// 줄을 바꾸어 작성
var name = '책',
	point = 2;
// 의미를 부여하여 변수를 작명 시맨틱 Semantic 이라고 한다.

/**
 * 변수에 값을 할당하는 방법
 */
// 나중에 할당한 값으로 바뀜
var star = 123, star = 456;


/**
 * ch01.4 주석 Comment
 */
// 주석은 JS 코드로 인식하지 않음
// 한줄 주석
/*
블록 Block 주석
일반적으로 4줄, 5줄 이상을 주석으로 처리할 때 사용합니다.
 */
/**
 * JS 스펙에 정의된 주석은 아니며 블록 주석과 같은
 */
// JS 스펙(Specification) 이란
// 자바스크립트 문법을 작성한 문서
// ES3, ES5는 JS 스펙의 에디션(Edition)
// javascript는 프로그래밍 언어 javascript 엔진은 처리하고 컴파일하는 과정


/**
 * ch01.05 console.log()
 */
// 파라미터 값
// 콤바로 구분하여 다수 작성 가능
// JS 제공하는 것이 아니다. (브라우저, nodejs)
// https://console.spec.whatwg.org/#dir

/**
 * ch01.06 정수, 실수
 */
// 정수: 소수가 없는 숫자, 123, -123
// 실수: 소수를 가진 숫자 1.23, 1.0
// JS는 정수 실수를 구분하지 않음 (단 표시는 1로 표시);
console.log(1); // 1
console.log(1.); // 1
console.log(1.0); // 1
console.log(1.0001); // 1.0001


// 숫자 처리
// *정수와 실수를 구분하지 않음
//      64bit 부동 소수점 처리
//      IEEE 753 표준(https://ko.wikipedia.org/wiki/IEEE_754)
//      bit 0 과 1

//* 부동 소수점 처리란?
//      123을 123.0으로 처리
console.log(.123); // 0.123
console.log(0.12 + 5); // 5.12
// 중요 정수와 실수를 구분하는 언어(Java, C) 구분하는 언어에서는 실수와 정수를 더할 수 없다.
// JS는 정수와 실수를 구분하지 않고 실수로 계산함

//* ES6 정수와 실수 구분 가능해짐

/**
 * ch01.07 상수, 진수
 */
//* 변경할 수 없는 값
//* 상수 변수
//      상수가 설정된 변수
//* 상수 변수 표기 방법
//      코딩관례로 대문자 사용
//* JS가 제공하는 상숫값은 변경 불가
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// 진수
// 10진수: 123
// 16진수
//      0XFF
//      1번째에 숫자 0작성
//      2번째에 영문자 x 작성
//      3번째에 이후: 0 ~ f 작성
// 대소문자 구분하지 않음
console.log(0XF); // 15
console.log(0xff); // (16*15) + 15 = 255
console.log(0xfff); // (16*16*15) + (16*15) + 15 = 4095
// A: 10, B: 11, C: 12, D: 13, E: 14, F: 15
console.log(0xaaf); // (16*16*10) + (16*10) + 15 = 2735

// 8진수
//      ES3에서 폐지, ES6 재정의
// 2진수
//      ES6에서 특별한 방법 제공(머신런닝, 딥러닝에서 2진수 사용);

/**
 * ch01.08 데이터 타입
 */
// 데이터 타입을 자료형이라고 부름
// 데이터는 반드시 타입을 가짐
//      JS는 데이터 기준으로 타입을 결정
//      타입을 먼저 선언하고 타입에 맞는 데이터를 할당하지 않음 (Java, C와 다름)
var point = 123;
console.log(typeof point);
point = '책';
console.log(typeof point);
// 타입에 따라 처리가 달라지고 에러 발생함 (가감승제 할때 중요)

/**
 * ch01.09 데이터 타입 분류
 */
// Number
// NaN Not a Number
// String
// 작은 따옴표를 표시하려면 큰 따옴표 안에 작은 따옴표를 작성합니다.
// 큰 따옴표를 표시하려면 작은 따옴표 안에 큰 따옴표를 작성합니다.

/**
 * ch01.10 undefined, Null 타입
 */
// Undefined (대문자) 타입
// 초깃값으로 undefined 값 설정
// 자바스크립트는 이름과 값을 가져야 함
// undefined 는 이름만 할당 되었다고 볼 수 있음;
// null 타입
// 의도적으로 값을 할당한 것으로 코드를 수행
var new1;
console.log(new1);
var point = null;
console.log(point);

/**
 * ch01.11 Boolean, Object 타입
 */
// Object 형태
// 대문자 Obejct 는 { name: value } 자바스크립트의 기본구조이다
// property 는 name과 value 하나를 지칭
// 중괄호안에  0개이상의 name: value를  대문자 Object 이다.
// 대문자 Object는 프로퍼티 집하이다.
// 프로퍼트 key 또는 name 이라고 한다. 분류는 es5 에서는 할 필요없다.

// 타입정리
// 기본 데이터 타입(자료형)을 Primitive type 이라고 한다.
console.log(typeof 123);
console.log(typeof '문자열');
console.log(typeof true);
console.log(typeof undefined);

// 데이터 타입이 같다.?
console.log(typeof null);
console.log(typeof { book: '책' });
// typeof null => object
// typeof 설계 미스로 es6는 구분 가능함
// typeof 키워드에 한계가 있다.
// es5에선 null 과 프로퍼티로 구성된 Object를 구분할 수 없다.










