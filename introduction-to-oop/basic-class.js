class Vehicle {
    constructor(name,type,cc,engine,tags){
        this.name = name;
        this.type = type;
        this.cc = cc;
        this.engine = engine;
        this.tags = tags
    }
    startEngine(){
        this.engine = true;
        console.log("Engine has started!")
    }
    stopEngine(){
        this.enging = false;
        console.log("Engine has stopped!")
    }
    keywordThis(){
        console.log(this)
    }
}

let civic = new Vehicle("Honda Civic 2021","Sedan",5000,false,[]); // vehicle instance of Vehicle
let jazz = new Vehicle("Honda Jazz 2021","Sedan",3000,false,['jazz'])
let pajero = new Vehicle("New Pajero 2021","SUV",15000,false,[])

// console.log(civic)
// console.log(jazz)
// console.log(pajero)
// console.log(civic.name)
// civic.startEngine()
// console.log(civic.engine)
// console.log(jazz.engine)
// console.log(pajero.engine)
// civic.keywordThis()
