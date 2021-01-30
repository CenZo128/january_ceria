// Pilar - pilar utama dalam OOP
/**
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Encapsulation
 * 4. Abstraction
 */
 // INHERITANCE
 
const {Sedan,Pickup,SUV} = require('./Vehicle')

// console.log(vehicle)
let sedan = new Sedan("Civic 2021","Sedan",5000,false,[])
let colt = new Pickup("Colt 2021","Pickup",3000,false,['cargo'])
let tiguan = new SUV("VW Tiguan 2021","SUV",10000,false,[])

// console.log(sedan)
// console.log(colt)
// console.log(tiguan)

// Factory Class
class Showroom {
    constructor(vehicles){
        this.vehicles = vehicles || [];
    }
    showVehicles(){
        return this.vehicles
    }
    addVehicle(car){
        this.vehicles.push(car)
    }
}

let showroom = new Showroom()

showroom.addVehicle(sedan)
showroom.addVehicle(colt)
showroom.addVehicle(tiguan)

console.log(showroom)