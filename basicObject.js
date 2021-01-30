// Object 
// Array with key / properties 


var students = ["Vincent", 3.21, true]

var result = {};
result.name = students[0];
result.gpa = students[1];
result.isGraduate = students[2];

// console.log(result);
// Object Literal
var student = {
    name: "Vincent",
    gpa: 3.21,
    isGraduate: true
}

// console.log(typeof student) -> object
// console.log(typeof student) -> object
// console.log(student.name)
// console.log(student["gpa"])
// console.log(student.isGraduate)

var shopping = {
    items: ['egg', 'milk', 'butter'],
    total: 100000
}

// for(var key in student){
//     console.log(key)
// }


// Array of objects

var campuses = [
    {
        name: 'Anggrek',
        location: 'Kemanggisan',
        isOpen: false,
        studentTotal: 3000,
        traffic: 'High'
    },
    {
        name: 'Syahdan',
        location: 'Kemanggisan',
        isOpen: false,
        studentTotal: 1750,
        traffic: 'High'
    },
    {
        name: 'Kijang',
        location: 'Slipi',
        isOpen: false,
        studentTotal: 1000,
        traffic: 'Medium'
    }
];

// console.log(campuses)
// console.log(campuses[2].name)
// console.log(campuses[0].studentTotal)


var books = [
    ['Computer', 500, true, 15000, 'Javascript basic for beginner friendly'],
    ['Gardening', 350, true, 30000, 'How to plant a potato']
]

//Case 
// Expected result :
/* 
[
    {
        title : 'Javascript basic for beginner',
        type : 'Computer',
        pages : 500,
        isSold : true,
        price : 15000,
    },
    {
        title : 'How to plant a potato',
        type : 'Gardening',
        pages : 350,
        isSold : true,
        price : 30000,
    }
]
 */
function convertToObject(array) {
    var result = []
    var tempObj = {}

    for (var i = 0; i < array.length; i++) {
        tempObj.title = array[i][4]
        tempObj.type = array[i][0]
        tempObj.pages = array[i][1]
        tempObj.isSold = array[i][2]
        tempObj.price = array[i][3]

        result.push(tempObj);
        tempObj = {}
    }

    return result
}

// console.log(convertToObject(books))

// Buat function untuk cek palindrome
// Palindrome sebuah kata, jika dibalik sama 
// -> katak, kodok, kasur rusak

function cekPalindrome(string){
    // code here
    
}

//Test Case
console.log(cekPalindrome('katak')) // true
console.log(cekPalindrome('baso')) // false
console.log(cekPalindrome('kasur rusak')) // true
