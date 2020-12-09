function adAstra(input) {
    let data = input.shift();
    let pattern = /(#|\|)(?<itemName>[A-Za-z ]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let curMatches = data.matchAll(pattern);
    let products = [];
    let totalCalories = 0;

    for (let match of curMatches) {
        let name = match.groups.itemName;
        let expirationDate = match.groups.expirationDate;
        let calories = Number(match.groups.calories);

        products.push({name, expirationDate, calories})
        totalCalories += calories;
    }

    let numDays = Math.trunc(totalCalories / 2000);

    console.log(`You have food to last you for: ${numDays} days!`);
    
        products.forEach(product => {
            console.log(`Item: ${product.name}, Best before: ${product.expirationDate}, Nutrition: ${product.calories}`);
        });
    
}

adAstra(
    [ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
)


console.log(Math.trunc(5,5))