// Destructuring

const obj = {
    player: "Daniel",
    experience: 100,
    wizardLevel: false
}

// const player = obj.player;
// const experience = obj.experience;
const { player, experience} = obj;
// let wizardLevel = obj.wizardLevel;
let { wizardLevel } = obj;


// Object properties

const name = "john snow";
const a = "Simon";
const b = "true";
const c = {};

const obj2 = {
    [name]: "hello",
    ["ray" + "smith"]: "hihi"
}

const obj3 = { a, b, c};

console.log(obj3);