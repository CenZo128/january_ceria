// OOP -> Object Oriented Programming
/**
 * Pilar pilar utama dalam OOP :
 * 1. Inheritance
 * 2. Polymorphism : override, overload
 * 3. Encapsulation : public, private, protected
 * 4. Abstraction
 */

 // Encapsulation : private

 class Vehicle {
    constructor(name,type,cc,engine,tags){
        this._name = name;
        this._type = type;
        this._cc = cc;
        this._engine = engine;
        this._tags = tags
    }
    get name(){
        return this._name
    }
    set setName(name){
        this._name = name
    }

    startEngine(){
        this.engine = true;
        console.log("Engine has started!")
    }
    stopEngine(){
        this.engine = false;
        console.log("Engine has stopped!")
    }
    keywordThis(){
        console.log(this)
    }
}

class Sedan extends Vehicle {
    constructor(name, type, cc, engine, tags){
        super(name, type, cc, engine, tags)
    }
    // Override -> menimpa method yg bernama sama
    startEngine(){
        super.startEngine()
        console.log("Ini override")
    }
}

let civic = new Sedan("Honda Civic 2021","Sedan",5000,false,[]);

console.log(civic.name)
civic.setName = "New Civic 2021" 
console.log(civic.name)
