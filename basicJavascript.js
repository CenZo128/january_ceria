//Variable -> sebuah penampung yang memiliki nilai/value

var angka = 10;
var greetings = "Hello, how are you ?";
var isGood = true;

var undef = undefined;
var empty = null;

//Tipe data primitif
/**
 * Number       : 1,2,3,100,1000,-10,-15,5.5,7.5
 * String       : 'a','A',"hello world",'1',`backtick`
 * Boolean      : true, false
 * Object
 * undefined
 * null
 */

// console.log(angka);
// console.log(greetings);
// console.log(isGood);

// console.log(undef);
// console.log(empty);

var alas = 5;
var tinggi = 10;
var luas;

luas = 1 / 2 * alas * tinggi;

// console.log(luas)
// console.log("Jadi, hasil luas segitiga adalah : " + luas + " cm^2")

var num = 10;
var numString = '10';
var kata1 = 'Hello';
var kata2 = 'World'
var nilai = true;

// console.log(nilai + num)
// console.log(kata1 + " " + kata2)

//Truthy -> nilai yang selalu benar / true
//Falsy -> nilai yang selalu salah / false

// console.log(typeof num)

// Logic Operations
/**
 * AND  : &&
 * OR   : ||
 * NOT  : !
 * EQUAL (value) : ==
 * EQUAL (value and data type) : ===
 */

// a = b -> b = a -> koding tidak bisa

var cekAngka = num === numString

//  console.log(cekAngka)

// Conditional 
/**
 * if, else ... if, else
 * switch ... case
 * ternary -> shorthand
 */

// if else if else
var x = 3;

// if (x === 1) {
//     console.log('Angka 1')
// } else if (x === 2) {
//     console.log('Angka 2')
// } else {
//     console.log('Bukan angka 1 dan angka 2')
// }

// switch case
var task = "minum";

// switch (task) {
//     case "Makan":
//         console.log("Makan dulu")
//         break;
//     case "Minum":
//         console.log("Minum dulu")
//         break;
//     default:
//         console.log("Selain makan dan minum dulu")
//         break;
// }

//ternary
var n = 10;
// if (n === 10) {
//     console.log('Ini 10')
// } else {
//     console.log('Bukan 10')
// }

// n === 10 ? console.log("Ini 10") : console.log('Bukan 10')

//Case
// Cek apakah bilangan n merupakan genap atau ganjil

// ALGORITMA
/**
 * Buat variable n
 * Membagi n dengan modulus 2
 * Jika hasil bagi sama dengan 0, print genap
 * Jika hasil bagi sama dengan 1, print ganjil
 */

 
 //PSEUDOCODE
 /**
  * STORE n WITH 10
  * 
  * IF n MOD 2 == 0
  *     PRINT "Bilangan Genap"
  * ELSE IF n MOD 2 == 1
  *     PRINT "Bilangan Ganjil"
  * ENDIF
  */

  //CODINGAN
  var n = 15;

  if(n % 2 === 0){
      console.log("Bilangan Genap")
  }else if(n % 2 === 1){
      console.log("Bilangan Ganjil")
  }