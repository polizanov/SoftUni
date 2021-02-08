function extendProrotype(classToExtend) {
    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Human {
    toString() {
        return "Saying something"
    }
}

extendProrotype(Human)

let person = new Human;
console.log(person.toSpeciesString())