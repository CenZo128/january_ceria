class Vehicle {
    constructor(name, type, cc, engine, tags) {
        this.name = name;
        this.type = type;
        this.cc = cc;
        this.engine = engine;
        this.tags = tags
    }
    startEngine() {
        this.engine = true;
        console.log("Engine has started!")
    }
    stopEngine() {
        this.enging = false;
        console.log("Engine has stopped!")
    }
    keywordThis() {
        console.log(this)
    }
}

// Sedan , Pickup, SUV
class Sedan extends Vehicle {
    constructor(name, type, cc, engine, tags) {
        super(name, type, cc, engine, tags)
    }
}
class Pickup extends Vehicle {
    constructor(name, type, cc, engine, tags) {
        super(name, type, cc, engine, tags)
    }
}
class SUV extends Vehicle {
    constructor(name, type, cc, engine, tags) {
        super(name, type, cc, engine, tags)
    }
}

module.exports = {
    Sedan, Pickup, SUV
}