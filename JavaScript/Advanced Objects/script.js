// Reference Type
// User created objects are references to specified defined objects

// Context vs Scope
let b = () => {
    let a = 4;
    console.log(this);
}

console.log(this);

// Instantiation
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

console.log(wizard1)
console.log(wizard2)

wizard1.introduce()
wizard2.play()