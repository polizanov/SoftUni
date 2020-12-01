function match(text) {
    let validation = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    names = [];

    while ((validNames = validation.exec(text)) !== null) {
        names.push(validNames[0])
    }

    console.log(names.join(' '));
}

match('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')