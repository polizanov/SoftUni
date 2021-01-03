function sortArray(input) {
    console.log(input.sort((a, b) => {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length
    }).join("\n"));

}

sortArray(['test',
    'Deny',
    'omen',
    'Default']


)