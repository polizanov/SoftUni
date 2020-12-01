function cats(catArray) {
    let input = catArray.slice();
    let cat = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let catName = input[i].split(' ')[0];
        let catAge = Number(input[i].split(' ')[1]);
        cat.push(new Cat(catName, catAge));
    }

    function meow(object) {
        console.log(`${object.name}, age ${object.age} says Meow`);
    }

    for (let i = 0; i < cat.length; i++) {
        meow(cat[i]);
    }
}

cats(['Mellow 2', 'Tom 5']);