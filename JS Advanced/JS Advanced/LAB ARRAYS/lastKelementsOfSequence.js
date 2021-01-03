function lastKelementsOfSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        if (sequence.length <= k) {
            let sum = sequence.reduce((acc, a) => acc + a);
            sequence.push(sum);
            continue;
        }
        let sum = sequence.slice(sequence.length - k).reduce((acc, a) => acc + a);
        sequence.push(sum);
    }

    console.log(sequence.join(" "));
}

lastKelementsOfSequence(8, 2);