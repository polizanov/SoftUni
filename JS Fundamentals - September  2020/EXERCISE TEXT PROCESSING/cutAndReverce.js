function cutAndReverce(input) {
    let middleOfStringIndex = Number(input.length / 2);
    let leftPart = input.substring(0, middleOfStringIndex);
    let rightPart = input.substring(middleOfStringIndex);

    console.log(reverceString(leftPart));
    console.log(reverceString(rightPart));

    function reverceString(string) {
        let output = '';

        for (let i = string.length - 1; i >= 0; i--) {
            output += string[i]
        }

        return output;
    }
}

cutAndReverce('tluciffiDsIsihTgnizamAoSsIsihT');