// File System 

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

const Showroom = require('./Showroom')

// console.log(Showroom.getVehicles(parseData))
Showroom.addVehicles(["Jazz 2021", "Sedan", 3000, false, []])
Showroom.addVehicles(["Pajero 2021","SUV",50000,false,[]])
Showroom.getVehicles()
// Create Read Update Delete -> Vehicle