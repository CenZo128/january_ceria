// var input = ['blueberry', 'apple', 'orange', 'anggur', 'banana']
/*Output : [
    ['apple','anggur'],
    ['blueberry','banana'],
    ['orange']
] */

// var result = [];
// var temp = [];
// var kamus = 'abcdefghijklmnopqrstuvwxyz'

// for (var i = 0; i < kamus.length; i++) {
//     for (var j = 0; j < input.length; j++) {
//         if (kamus[i] === input[j][0]) {
//             temp.push(input[j])
//         }
//     }
//     if (temp.length !== 0) {
//         result.push(temp);

//     }
//     temp = []
// }
// console.log(result)


let input = "kamu makan bersama teman kamu"
/* Output : [
    ['Makan','Bersama','Teman'],
    ['Kamu']
]

*/
// Input : "jalan jalan dan makan makan enak"
/* Output : [
    ['Dan','Enak'],
    ['Jalan','Makan']
]
*/

var arrInput = [];
var str = ''

for (var i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
        if (str.length === 0) {
            str += input[i].toUpperCase()
        } else {
            str += input[i]
        }
    } else {
        arrInput.push(str);
        str = ''
    }
    if (i === input.length - 1) { //input.length - 1 -> last index
        arrInput.push(str);
        str = ''
    }
}

console.log(arrInput)
