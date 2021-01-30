let todo = {
    todos: [
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
    ],

    getTodo() {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].category === "In Progress") {
                console.log(`${i + 1}. ${this.todos[i].task} []`) //Template Literal
            } else if (this.todos[i].category === "Done") {
                console.log(`${i + 1}. ${this.todos[i].task} [x]`)
            }
        }
    },

    createTodo(task, category) {
        // Mengambil id dari todo list
        let id = this.todos[this.todos.length - 1].id + 1
        // Mengubah ke dalam bentuk object
        let tempObj = {
            id,
            task,
            category
        }
        // Memasukkan / push ke dalam todo list (array of objects)
        this.todos.push(tempObj)
    },

    deleteTodo(id) {
        let result = [];

        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id !== id) {
                result.push(this.todos[i])
            }
        }
        this.todos = result;
        console.log(`Id ${id} sudah di delete.`)
    },

    updateTodo(id,task,category){
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.todos[i].task = task
                this.todos[i].category = category
            }
        }
        console.log(`Id ${id} sudah di update.`)
    }
}


// todo.getTodo()
todo.createTodo('Masak makan siang', 'In Progress')
todo.createTodo('Pesen kue', 'In Progress')
todo.getTodo()

todo.deleteTodo(4)
todo.deleteTodo(5)

todo.updateTodo(1,'Sudah belajar js','Done')
todo.getTodo()

