// console.log("Selamat pagi");
// console.log("Selamat pagi");
// console.log("Selamat pagi");
// console.log("Selamat pagi");
// console.log("Selamat pagi");

//Looping / Iteration
/**
 * for,
 * while,
 */


// i++ -> i di tambah 1 / increment
// i += 1
// i = i + 1

// i += 2 -> di tambah 2 / increment
// i = i + 2

// for(var i = 0; i < 5; i ++){
//     console.log("Selamat pagi")
// }

//SImulasi
/**
 * i = 0
 * Selamat pagi
 * 
 * i = 1
 * Selamat pagi
 * Selamat pagi
 * 
 * i = 2
 * Selamat pagi
 * Selamat pagi
 * Selamat pagi
 * 
 * i = 3
 * Selamat pagi
 * Selamat pagi
 * Selamat pagi
 * Selamat pagi
 * 
 * i = 4
 * Selamat pagi
 * Selamat pagi
 * Selamat pagi
 * Selamat pagi
 * Selamat pagi
 * 
 * i = 5
 */

// Case
/**
 * Input : 5
 * Output : *****
 */
// var asterisk = ''
// var number1 = '10'

// console.log(number === number1)

// for (var i = 0; i < number; i++) {
//   console.log('*')
// asterisk += '*';
// }
// console.log(asterisk)

// Case
/**
 * 1. Print dari angka 1 - 10
 * 2. Print '12345678910'
 */

// Jawaban no 1
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

// Jawaban no 2
// Algoritma
/**
 * Buat variable kosong utk menyimpan string
 * Looping dari 1 sampai 10
 * Tambah angka yang sudah dirubah menjadi string ke dalam variable kosong
 */
// Pseudocode
/**
 * STORE string WITH ''
 * 
 * FOR i = 1 to 10
 *      string += i
 * ENDFOR
 */

//Codingan
// var string = ''
// for(var i = 1 ; i <= 10 ; i++){
//     string += String(i)
// }
// console.log(string)

// Case
/**
 * Print dari angka 1 - 10 dan cek apakah genap dan ganjil
 * Input : 10
 * Output :
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * .
 * .
 * .
 * 9 adalah ganjil
 * 10 adalah genap
 */

// Algoritma
/**
 * Buat variable number
 * Looping dari 1 sampai 10
 * Dalam looping cek, apakah genap atau ganjil
 * Setelah cek, print angka dan genap atau ganjil
 */

// Pseudocode
/**
 * STORE number WITH 10
 * 
 * FOR i = 1 to 10 
 *     IF i MOD 2 === 0 THEN
 *         PRINT 'i adalah genap'
 *     ELSE IF i MOD 2 === 1 THEN
 *         PRINT 'i adalah ganjil'
 *     ENDIF
 * ENDFOR
 */

//Codingan
// var number = 10;

// for(var i = 1 ; i <= number ; i++){
//     if(i % 2 === 0){
//         console.log(i + ' adalah genap')
//     }else if(i % 2 === 1){
//         console.log(i + ' adalah ganjil')
//     }
// }

// Kapan menggunakan for ? kapan menggunakan while ?
// For untuk pengulangan yang kita SUDAH TAHU berapa kali
// While untuk pengulangan yang kita BELUM TAHU berapa kali

// var number = 5;
// var i = 1;

// while (i <= number) {
//     if (i % 2 === 0) {
//         console.log(i + ' adalah genap')
//     } else if (i % 2 === 1) {
//         console.log(i + ' adalah ganjil')
//     }
//     i++;
// }


// Conditial : Nested conditional / Advanced conditional
// Case : 
/**
 * Dalam sebuah cafe, yang boleh masuk adalah umur 17 tahun ke atas.
 * Jika kurang dari 17 tahun ke atas, tidak boleh masuk.
 * Tiap pengunjung, harus membawa uang. 
 * Jika kurang dari 100000, pengunjung tidak boleh beli minum.
 * Jika memiliki uang yang cukup, pengunjung dapat membeli minum.
 */

// var umur = 18;
// var uang = 150000;

// if(umur < 17){
//     console.log("Maaf, tidak boleh masuk cafe.")
// }else{
//     if(uang <= 0){
//         console.log("Maaf, tidak boleh masuk cafe. (uang)")
//     }else{
//         if(uang < 100000){
//             console.log("Maaf, tidak boleh beli minum.")
//         }else {
//             console.log("Yeahh, welcome to the club!")
//         }
//     }
// }

// Looping : Nested Looping / Advanced looping

//Case
/**
    ***
    ***
    ***
*/
var bintang = ''
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        bintang += '*'
    }
    console.log(bintang)
    bintang = ''
}

// i = 0 , j = 0   -> * 
// i = 0 , j = 1   -> **
// i = 0 , j = 2   -> ***
// i = 1 , j = 0   -> ****
// i = 1 , j = 1   -> *****