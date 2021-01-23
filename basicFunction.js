//Function
//Suatu kumpulan perintah untuk menjalankan task tertentu -> reusable


function splitSentence(string) {
    var arrInput = [];
    var str = ''

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            if (str.length === 0) {
                str += string[i].toUpperCase()
            } else {
                str += string[i]
            }
        } else {
            arrInput.push(str);
            str = ''
        }
        if (i === string.length - 1) { //string.length - 1 -> last index
            arrInput.push(str);
            str = ''
        }
    }
    return arrInput 
}

console.log(splitSentence("kamu makan bersama teman kamu"))
console.log(splitSentence("aku dia kamu aku dia"))
console.log(splitSentence("makan makan dan jalan jalan"))



// function greetings() {
//     console.log("Hello world")
//     console.log("Selamat siang")
// }

//Invoke / call function

// greetings()
// var a = 15;
// var b = 2;
// var tambah = a + b;

// console.log(tambah)

// var a1 = 10;
// var b1 = 17;
// var tambah1 = a1 + b1;

// console.log(tambah1)

function tambah(a,b){
    var hasil = a + b;
    return hasil
}

function kali(a,b){
    var hasil = a * b;
    return hasil
}

// Buat function untuk cek ganjil dan genap

// var angka = 10;
// if(angka % 2 === 0){
//     console.log(angka + ' adalah Genap.')
// }else if( angka % 2 === 1){
//     console.log(angka + ' adalah Ganjil.')
// }
function cekAngka(number){
    if(number % 2 === 0){
        // console.log(number + ' adalah Genap.')
        return number + ' adalah Genap.'
    }else if( number % 2 === 1){
        // console.log(number + ' adalah Ganjil.')
        return number + ' adalah Ganjil.'
    }
}

// console.log(cekAngka(8))
// console.log(cekAngka(17))
// console.log(cekAngka(1))
// console.log(cekAngka(5))
// console.log(cekAngka(50))
