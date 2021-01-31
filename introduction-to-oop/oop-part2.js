// OOP -> Object Oriented Programming
/**
 * Pilar pilar utama dalam OOP :
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Encapsulation : public, private, protected
 * 4. Abstraction
 */

// Case
/**
 * Seorang chef specialis makanan manis / dessert akan membuat 3 jenis dessert yaitu Chocolate Cookies, Sweet Cookies, Strawberry Cookies. Dimana dia akan membuat nya dalam Kitchen (factory class). 
 * Bantulah chef tsb untuk membuat Cookies dengan bantuan OOP menggunakan bahasa Javascript.
 * 
 * DIRECTION
 * ==========
 * Task 1 : Buat class Cookie, yang berisi attribute :
 * - name
 * - price
 * - ingredients 
 * - type 
 * 
 * Task 2 : Buat class inheritance utk Chocolate, Sweet, Strawberry, yang memiliki attribute tambahan berup :
 * - isSweet
 * 
 * Task 3 : Buat class Kitchen sebagai factory class, yang memiliki attribute dan method :
 * - container : berisi cookies2 yang dibuat
 * 
 * - bake() : method ini bertujuan untuk membuat kue dan memasukkan ke dalam container
 * - eat() : method ini bertujuan utk delete cookies dari container
 * - addSugar() : method ini bertujuan untuk mengganti isSweet menjadi true
 * - showCookies() : method ini bertujuan untuk melihat cookies yang ada.
 */

// Task 1 :
class Cookie {
    constructor(name, price, ingredients, type) {
        this.name = name || '';
        this.price = price || 0;
        this.ingredients = ingredients || [];
        this.type = type || '';
    }
}

// Task 2 :
class ChocolateCookie extends Cookie {
    constructor(name, price, ingredients, type, isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet ;
    }
}
class SweetCookie extends Cookie {
    constructor(name, price, ingredients, type , isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}
class StrawberryCookie extends Cookie {
    constructor(name, price, ingredients, type , isSweet) {
        super(name, price, ingredients, type);
        this.isSweet = isSweet;
    }
}

// Task 3

class Kitchen {
    constructor(container) {
        this.container = container || []
    }
    bake(array){
        const [name,price,ingredients,type] = array
        
        switch(type){
            case 'Chocolate':
                this.container.push(new ChocolateCookie(name,price,ingredients, type,false))
                console.log("Chocolate cookie is done!")
            break
            case 'Sweet':
                this.container.push(new SweetCookie(name,price,ingredients, type,false))
                console.log("Sweet cookie is done!")
                break
            case 'Strawberry':
                this.container.push(new StrawberryCookie(name,price,ingredients, type,false))
                console.log("Strawberry cookie is done!")
                break
        }
    }
    showCookies(){
        console.log(this.container)
    }
    addSugar(name){
        this.container.forEach(cookie => {
            if(cookie.name === name){
                cookie.isSweet = true
            }
        })
        console.log("Sweet added!")
    }
    eat(name){
        let result;
        result = this.container.filter(cookie => cookie.name !== name)
        this.container = result
        console.log(`${name} is already eaten!`)
    }
}

let kitchen = new Kitchen()
kitchen.bake(["Choco Lava Cake",150000,['chocolate'],"Chocolate"])
kitchen.bake(["Sugar cake",175000,['sugar','flour'],"Sweet"])
kitchen.bake(["Red cake",375000,['strawberry','flour'],"Strawberry"])
kitchen.addSugar("Choco Lava Cake")
kitchen.eat("Red cake")
kitchen.showCookies()