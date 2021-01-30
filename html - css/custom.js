// let angka = 10;
// console.log(angka)

// let fruits = ['apple', 'cherry', 'banana']
// console.log(fruits)


// const tambah = (a, b) => {
//     let hasil = a + b;
//     return hasil
// }
// console.log(tambah(15, 17))

// Global Scope -> variable yang bisa di akses di seluruh scope
// Local Scope -> variable yang bisa di akses hanya di scope tsb

// let number = 100;

// const modulus = () => {
//     // let total = number * num
//     // console.log(total)
//     number = 1;
//     console.log(number)
// }

// modulus()
// console.log(number)

// CASE
/**
 * Buat sebuah app to do list
 * - Buat function createTodo -> untuk menambah todo list
 * - Buat function deleteTodo -> untuk menghapus todo list
 * - Buat function getTodo -> untuk mengambil data todo list
 * - Buat function updateTodo -> untuk mengupdate todo list
 */

// Function getTodo
/**
 * 1. Belajar javascript []
 * 2. Kerjakan tugas js []
 * 3. Live test js [x]
 */

// Global variable
let todoList = [
    {
        id: 1,
        task: "Belajar javascript",
        category: "In Progress"
    },
    {
        id: 2,
        task: "Kerjakan tugas js",
        category: "In Progress"
    },
    {
        id: 3,
        task: "Live test js",
        category: "Done"
    }
];

const getTodo = (list) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].category === "In Progress") {
            console.log(`${i + 1}. ${list[i].task} []`) //Template Literal
        } else if (list[i].category === "Done") {
            console.log(`${i + 1}. ${list[i].task} [x]`)
        }
    }
}

const createTodo = (task, category) => {
    // Mengambil id dari todo list
    let getId = todoList[todoList.length - 1].id
    // Mengubah ke dalam bentuk object
    let tempObj = {
        id: getId + 1,
        task: task,
        category: category
    }
    // Memasukkan / push ke dalam todo list (array of objects)
    todoList.push(tempObj)
    // console.log(tempObj)
}

const deleteTodo = id => {
    let result = [];

    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id !== id) {
            result.push(todoList[i])
        }
    }
    todoList = result;
    console.log(`Id ${id} sudah di delete.`)
}

const updateTodo = (id, task, category) => {
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            todoList[i].task = task
            todoList[i].category = category
        }
    }

    console.log(`Id ${id} sudah di update.`)
}

createTodo('Explore es6 di javascript sekarang', 'Done')
createTodo('Mencari jawaban di google search', 'In Progress')

deleteTodo(2);
deleteTodo(4);

updateTodo(1, 'Belajar python', 'In Progress');
updateTodo(5, 'Belajar lebih dalam tentang js', 'Done')

getTodo(todoList)
console.log(todoList)