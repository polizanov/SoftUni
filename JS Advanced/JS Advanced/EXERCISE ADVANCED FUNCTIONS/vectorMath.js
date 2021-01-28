let solution = {
    "add": (a, b) => [a.reduce((acc, a) => acc + a, 0), b.reduce((acc, b) => acc + b, 0)],
    "multiply": (vector, num) => [vector[0] * num, vector[1] * num],
    "length": (vector) => Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2)),
    "dot": (a, b) => a.reduce((acc, a) => acc * a, 0) + b.reduce((acc, b) => acc * b, 0),
    "cross": (a, b) => a[0] * b[1] - b[0] * a[1],
}

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]))
console.log(solution.cross([3, 7], [1, 0]))
console.log("alala")




