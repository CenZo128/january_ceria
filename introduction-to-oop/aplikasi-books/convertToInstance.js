const Book = require('./Book')

function convertToInstance(books){
    // code here
    let result = [];

    books.forEach(book => {
        // let title = book[0];
        // let author = book[1];
        // let price = book[2];
        // let page = book[3];
        // let isSold = book[4];
        
        // Destructuring array (ES6)
        const [title,author,price,page,isSold] = book

        let instanceBook = new Book(title,author,price,page,isSold)
        result.push(instanceBook);
    })

    return result
}
module.exports = convertToInstance