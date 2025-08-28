class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color
    }
    getName = () => {
        return this.name;
    }
    getColor = () => {
        return this.color;
    }
}
class SuperCar extends Car {
    constructor(name, color, signature) {
        super(name,color);
        this.signature = signature;
    }
    getSignatrure = () => {
        return this.signature;
    }
}

const bmw = new Car('BMW','Black');
const toyota = new Car('Toyota', 'White');
const ferrari = new SuperCar('Ferrari', 'Red', 'V8 Engine');

console.log(JSON.stringify(bmw));
console.log(JSON.stringify(toyota));
console.log(JSON.stringify(ferrari))