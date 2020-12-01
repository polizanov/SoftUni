function maxSequence(inputArray) {
    let sequence = [];
    let longestSequence = [];
    let totalSequence = 0
    let bestSequence = 0;
    let output = '';

    for (let index = 0; index < inputArray.length; index++) {
        if (totalSequence == 0) {
            sequence.push(inputArray[index]);
        }

        let totalElement = Number(inputArray[index]);
        let nextElement = Number(inputArray[index + 1]);

        if (totalElement === nextElement) {
            totalSequence++;
            sequence.push(nextElement);
        } else {
            if (totalSequence > bestSequence) {
                for (let curMovedElement = 0; curMovedElement < sequence.length; curMovedElement++) {
                    longestSequence[curMovedElement] = sequence[curMovedElement];
                }
                if (totalSequence > bestSequence) {
                    bestSequence = totalSequence;
                }
            }
            totalSequence = 0;
            sequence = [];
        }
    }


    for (let i = 0; i < longestSequence.length; i++) {
        output += longestSequence[i] + ' ';
    }

    console.log(output);
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);