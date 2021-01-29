function solution() {
    let output;
    let microelements = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0,
    }

    let recipes = {
        "apple": ["1 carbohydrate", "2 flavour"],
        "lemonade": ["10 carbohydrate", "20 flavour"],
        "burger": ["5 carbohydrate", "7 fat", "3 flavour"],
        "eggs": ["5 protein", "1 fat", "1 flavour"],
        "turkey": ["10 protein", "10 carbohydrate", "10 fat", "10 flavour"]

    }

    return function (instructions) {
        let methods = {
            "restock": (microelement, quantity) => {
                if (microelements.hasOwnProperty(microelement)) {
                    microelements[microelement] = microelements[microelement] + Number(quantity);
                    output = "Success";
                }
            },
            "prepare": (recipe, quantity) => {
                quantity = Number(quantity);

                for (const item of recipes[recipe]) {
                    let [num, name] = item.split(" ");
                    num = Number(num);
                    if (microelements[name] - num < 0) {
                        output = `Error: not enough ${name} in stock`;
                        return;

                    }
                }

                for (const item of recipes[recipe]) {
                    let [num, name] = item.split(" ");
                    num = Number(num);
                    microelements[name] = microelements[name] - (num * quantity)
                }

                output = "Success";
            },
            "report": () => {
                let reportString = "";
                Object.entries(microelements)
                    .forEach(([key, value]) => {
                        reportString += `${key}=${value} `
                    })
                output = reportString.trim();
            }
        }


        if (instructions.includes(" ")) {
            let [methodName, firstArgument, secondArgument] = instructions.split(" ");
            methods[methodName](firstArgument, secondArgument);
        } else {
            methods[instructions]();
        }

        return output
    }

}

let manager = solution();

console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));