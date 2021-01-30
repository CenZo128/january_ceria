// OOP = Object Oriented Programming -> Pemrograman Berbasis Objek

// function print(name){
//     return `Good morning, ${name}. Have a nice weekend!`
// }

// function convertToObject(array){
//     let result = {}
//     result.name = array[0]
//     result.gpa = array[1]
//     result.isGraduate = array[2]
//     return result
// }

// console.log(print("Vincent"))
// console.log(convertToObject(['Vincent',3.21,true]))

let vehicle = {
    // Keys 
    name : 'Honda Civic 2021',
    type : 'Sedan',
    cc : 5000,
    engine : false,
    tags : [],

    // Methods
    startEngine(){
        this.engine = true;
        console.log("Menyalakan mesin!!")
    },
    stopEngine : function(){
        this.engine = false;
        console.log("Matikan mesin!!")
    },
    keywordThis : function(){
        console.log(this)
    },
    mentionVehicle(){
        console.log(`${this.name}, type : ${this.type}, cc : ${this.cc} lt.`)
    },
    statusEngine(){
        if(this.engine){
            console.log(`${this.name} is started!!`)
        }else {
            console.log(`${this.name} is not started!!`)
        }
    },
    mentionTags(){
        console.log(this.tags)
    },
    addTags(tag){
        this.tags.push(tag);
        console.log(`${tag} has been added!`)
    }
}

// console.log(vehicle.name)
// console.log(vehicle["type"])
// console.log(vehicle.cc)

// vehicle.keywordThis()

// // vehicle.mentionVehicle()
// vehicle.startEngine()
// vehicle.statusEngine()
// vehicle.stopEngine()
// vehicle.statusEngine()

// vehicle.mentionTags()
// vehicle.addTags('mobil baru')
// vehicle.mentionTags()
// vehicle.addTags('new car')
// vehicle.mentionTags()

console.log(vehicle)