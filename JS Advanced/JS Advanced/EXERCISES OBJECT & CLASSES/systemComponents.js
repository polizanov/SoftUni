function systemComponents(input) {
    let data = {}
    for (const line of input) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");

        if (!data[systemName]) {
            data[systemName] = {}
        }

        if (!data[systemName][componentName]) {
            data[systemName][componentName] = [];
        }

        data[systemName][componentName].push(subcomponentName)
    }

    Object.entries(data)
        .sort((currKvp, nextKvp) => {
            if (Object.keys(currKvp[1]).length === Object.keys(nextKvp[1]).length) {
                return currKvp[0].localeCompare(nextKvp[0])
            }
            return Object.keys(nextKvp[1]).length - Object.keys(currKvp[1]).length;
        }).forEach(kvp => {
            console.log(kvp[0]);
            Object.entries(kvp[1])
                .sort((curr, next) => next[1].length - curr[1].length)
                .forEach(kvp => {
                    console.log(`|||${kvp[0]}`);
                        kvp[1].forEach(element => {
                            console.log(`||||||${element}`);
                        })
                })
        });

}

systemComponents(
['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']

)