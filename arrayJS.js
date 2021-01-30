// Array -> Kumpulan beberapa variable dengan tipe data sama maupun berbeda

// Array 1 Dimensi
// var numbers = [100,150,250,300,500]; 
// var strings = ['laptop','mouse','ssd','keyboard','cpu'];
// var vga = 'GTX 1660'

// console.log(numbers);
// console.log(strings);
// console.log(vga);

// console.log(numbers[0])
// console.log(numbers[2])
// console.log(strings[4])

// console.log(vga[0])
// console.log(Number(vga[7]))

// console.log(strings[0])
// console.log(strings[0][3])

// Built in function -> function yang sudah dibuat oleh js
// push -> menambahkan value baru ke dalam array
// numbers.push(550)
// numbers.push(750)
// numbers.push(1000)

// console.log(numbers)

// numbers.pop()
// numbers.pop()

// console.log(numbers)

// numbers.shift()
// numbers.pop()
// console.log(numbers)


// Array 2 Dimensi

// var shoppingCarts = [
//     ['cheese', 'mayonaise', 'yoghurt'],
//     ['apple', 'orange', 'banana'],
//     ['carrot', 'tauge', 'brocolli']
// ]
// var numbers = [[1, 2], [3.75, 5.75], [1.15, 7.15]]
// console.log(shoppingCarts)
// console.log(shoppingCarts[0][0])
// console.log(shoppingCarts[1][2])
// console.log(shoppingCarts[2][1])

// var sayur = 'vegetables adalah sayuran'
// var words = ['eat','ate','eaten']
// var word = 'javascript' 
//Output 1 -> Javascript

// console.log("Jumlah array words : " + words.length)

// for (var i = 0; i < sayur.length; i++) {
//     console.log(sayur[i])
// }

// algoritma
/**
 * buat variable word
 * buat result dengan isi string kosong
 * looping huruf per huruf 
 * huruf pertama dibuat uppercase
 * tiap huruf ditambahkan ke result yg berisi string kosong
 */

// Jawaban 1
//  var result = '';
//  for(var i = 0; i< word.length; i++){
//      if(i === 0){
//         result += word[i].toUpperCase()
//      }else{
//         result += word[i]
//      }
//  }
// console.log(result)

// var word = 'javascript' 
//Output 2 -> jAvAsCrIpT

// Jawaban 2
// var kata = ''
// for(var i = 0; i< word.length; i++){
//     if(i % 2 === 1){
//         kata += word[i].toUpperCase()
//     }else{
//         kata += word[i]
//     }
// }
// console.log(kata)

// var sayur = 'wortel tauge brokoli sawi kentang'
// var arraySayur = ['vegetables','adalah','sayuran']

// console.log(sayur.split(" "))

// algoritma
/**
 * buat variable array kosong
 * buat variable string kosong
 * looping dari huruf per huruf
 * tiap huruf ditambahkan ke string kosong
 * jika bertemu dengan spasi, maka string str di push ke dalam array kosong
 * lalu string str di reset dengan string kosong
 */

// var arrSayur = [];
// var str = ''

// for(var i = 0; i < sayur.length; i++){
//     if(sayur[i] !== ' '){
//         str += sayur[i]
//     }else {
//         arrSayur.push(str);
//         str = ''
//     }
//     if(i === sayur.length - 1){ //sayur.length - 1 -> last index
//         arrSayur.push(str);
//         str = ''
//     }
// }
// console.log(arrSayur)

// Case 
/**
 * Input : [3,1,7,15,10,21,14]
 * Output : [
 *  [3,15,21],
 *  [1,7],
 *  [10,14]
 * ]
 */

// Algoritma
/**
 * buat variable array kosong
 * buat variable kelipatan 3 dengan array kosong
 * buat variable ganjil dengan array kosong
 * buat variable genap dengan array kosong
 * looping tiap angka dari input
 * jika kelipatan 3, maka push ke var kelipatan 3
 * jika ganjil, maka push ke var ganjil
 * jika genap, maka push ke var genap
 * push var kelipatan 3, var gajil, var genap ke dalam variabel array kosong 
 */

//Codingan 
var input = [3,1,7,15,10,21,14]
var group = []
var kelipatan3 = []
var ganjils = []
var genaps = []

for(var i = 0; i <input.length; i++){
    if(input[i] % 3 === 0){
        kelipatan3.push(input[i])
    }else if(input[i] % 2 === 1){
        ganjils.push(input[i])
    }else if(input[i] % 2 === 0){
        genaps.push(input[i])
    }
}
group.push(kelipatan3);
group.push(ganjils);
group.push(genaps);

console.log(group);