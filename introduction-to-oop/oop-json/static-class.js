// File System 
const fs = require('fs');
const dataJson = fs.readFileSync('./data.json', 'utf8')
const parseData = JSON.parse(dataJson)

// const addObject = {
//     id : 2,
//     name : "Jazz 2021",
//     type : "Sedan", 
//     cc : 3500,
//     engine : false,
//     tags : ['jazz']
// }

// parseData.push(addObject)
// fs.writeFileSync('./data.json', JSON.stringify(parseData,null,3))
// console.log(parseData)

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

class Showroom {
    static getVehicles() {
        console.log("Welcome to Vincent showroom guys!!")
        let result;
        result = parseData.map(data => {
            const { id, name, type, cc, engine, tags } = data
            switch (type) {
                case 'Sedan':
                    return new Sedan(id, name, type, cc, engine, tags)
                    break;
                case 'Pickup':
                    return new Pickup(id, name, type, cc, engine, tags)
                    break;
                case 'SUV':
                    return new SUV(id, name, type, cc, engine, tags)
                    break;
            }

        })
        return result
    }
    static addVehicles(vehicle) {
        let vehicles = this.getVehicles();

        let car;
        const [name, type, cc, engine, tags] = vehicle
        let id = vehicles[vehicles.length - 1].id + 1;

        switch (type) {
            case 'Sedan':
                car = new Sedan(id, name, type, cc, engine, tags)
                break;
            case 'Pickup':
                car = new Pickup(id, name, type, cc, engine, tags)
                break;
            case 'SUV':
                car = new SUV(id, name, type, cc, engine, tags)
                break;
        }
        vehicles.push(car)
        // console.log(vehicles)
        this.save(vehicles)
    }
    static updateVehicles() {

    }
    static deleteVehicles() {

    }
    
    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data,null,3))
        console.log("Data has been saved to data.json ")
    }
}

// Showroom.getVehicles()
Showroom.addVehicles(["Jazz 2021", "Sedan", 3000, false, []])
Showroom.addVehicles(["Pajero 2021","SUV",50000,false,[]])
// Create Read Update Delete -> Vehicle