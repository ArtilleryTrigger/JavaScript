var a;
var aa;
var aaa;


function add (a,b){
    console.log(a+b)
}
add(3,4)

let b;    
let bb;
let bbb;


let abc = function add (a,b){
    console.log(a+b)
}
// bu yöntemle window da yer kaplamıyor.

// 'use strict'  
// kuralları katı şekilde uygula demek

let c=5

// let c=4  4 olmuyor ama var olsaydı sorun olmazdı

// function stack (){
    // stack()
// }

// stack() 
// yukarısı sonsuz döngüye giriyor
let d = 5;
console.log(d)
{
    let d = 8;
    console.log(d)
}
console.log(d)

var e = 6;
var f = 2;

console.log(e-f)
console.log(e+f)
console.log(e*f)
console.log(e/f)
console.log(e**f)

//increment decrement
var g=6;
var h=2;
g = --h
console.log({g})
console.log({h})

var ı=6;
var i=2;
ı = i--
console.log({ı})
console.log({i})

var j = 5;

console.log(j++)
console.log(j)
var l = 5;
var k = ++l
console.log({l})
console.log({k})
var n = 5;
var m = n++
console.log({n})
console.log({m})

o = 6
ö = 2
console.log(o%ö)

var p = 6;
var r = 2;
var s = 6;
var ş = 2;
var t = 6;
var u = 2;
var ü = 6;
var v = 2;
var y = 6;
var z = 2;

console.log(p=r, {p},{r})
console.log(s+=ş, {s},{ş})
console.log(t-=u, {t},{u})
console.log(ü*=v, {ü},{v})
console.log(y%=z, {y},{z})

var ab = 2;
var ba = '2';
console.log(ab==ba)
var ac = 2;
var ca = '2';
console.log(ac===ca)

var ad = 2;
var da = '2';
console.log(ad !== da)
console.log(ad != da)

let age = 14;

console.log(age >= 14)
console.log(age > 14)

console.log(false == false)
console.log(Boolean(0) == false)
console.log(Boolean('0') == false)
console.log(0 == false)
console.log('0' === false)
console.log(typeof null)
console.log(null == false)
console.log(null == true)
console.log(null+3)
console.log(null == 0)
console.log(Boolean(null) == false)
console.log(Boolean(null) == Boolean(0))
console.log(typeof NaN)
// isNaN ile type kontrolü yapıcaz
// aşağıda kullanıcıdan alınan veri sayı mı değil mi onu yapıyoruz
/*var af ;
while(isNaN(af)){
    af = prompt("Enter a Number")
    af = Number(af)
    console.log(af, typeof ArrayBuffer)
}
*/
console.log(015+025)
console.log(15+025)
console.log(015+25)
console.log(15+25)


console.log(9 < 8)
console.log(9 < 8 < 7)
console.log(false < 7) //yukardaki böyle görüyor 9 < 8 false olduğundan false da 0 gibi düşünüyor.

console.log('Clarusway'> 'clarusway') //67 > 99 false
console.log('C' .charCodeAt())
console.log('c' .charCodeAt())
console.log('Clarusway'< 'clarusway')
