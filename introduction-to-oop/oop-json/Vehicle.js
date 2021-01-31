class Vehicle {
    constructor(id, name, type, cc, engine, tags) {
        this.id = id
        this.name = name;
        this.type = type;
        this.cc = cc;
        this.engine = engine;
        this.tags = tags
    }
}

class Sedan extends Vehicle {
    constructor(id, name, type, cc, engine, tags) {
        super(id, name, type, cc, engine, tags)
    }
}
class Pickup extends Vehicle {
    constructor(id, name, type, cc, engine, tags) {
        super(id, name, type, cc, engine, tags)
    }
}
class SUV extends Vehicle {
    constructor(id, name, type, cc, engine, tags) {
        super(id, name, type, cc, engine, tags)
    }
}
module.exports = {
    Sedan, Pickup, SUV
}