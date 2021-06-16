console.log('Hello from app.js');
console.info('some infor');
console.warn('some warning');
console.error('error !!!!');

console.log('---------');

var myName = 'Matthew';
console.log(myName);
myNema = 'John';
console.log(myName);

var announce = 'Welcome to our school!';
console.log(announce);
announce = 'Welcome to Full-stack';
console.log(announce);

var num = 4;
console.log(num * num)

const PI = 3.141521;
console.log(PI);
let myNum = 5;
console.log(myNum);
myNum = PI * 4;
console.log(myNum);
// PI = myNum; //hata
console.log(PI);

const SECONDS_IN_A_DAY = 86400;
console.log(SECONDS_IN_A_DAY);
console.log(86400);

// alert('merhaba');
// var country = prompt('Enter your country:');
// console.log('Your country is', country);

var num1 = 42;
var num2 = 33;
if (num1 == 42) {
    let num2 = 22;
    console.log(num1, num2);
}

console.log(num1, num2);

var num3 = 42;
console.log(num3, num4);

var num4 = 88;
console.log(num3, num4);

// let ve cons önce ve sonra tanımlamalara hata

let num5 = 99;
num5=89;
console.log(num5);

func1();
function func1() {
    console.log('from func1 ...');

}
func1();

// let fonksiyon içindeyse aşağıya etki etmez.

function func1(){
    var myName = "John";
    console.log("from func1 ...", myName);
    if(true){
    let herName= "Daisy";
    var yourName= "Melih";
    console.log(yourName,herName );
}
console.log(yourName);
console.log(yourName, herName);
}
func1();