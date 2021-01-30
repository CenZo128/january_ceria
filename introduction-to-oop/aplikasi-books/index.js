const convertToInstance = require('./convertToInstance')

let books = [
    ["Javascript for dummy","Vincent",50000,300,true],
    ["Web Design BS5","Vincent",35000,150,false],
    ["All about Node","Vincent",15000,100,true]
];

console.log(convertToInstance(books))

// Expected result
/*
[
    Book {
        title : "Javascript for dummy",
        author : "Vincent",
        price : 50000,
        page : 300,
        isSold : true
    }
]
 */