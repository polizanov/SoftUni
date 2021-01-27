function solution() {
    let string = "";

    return {
        "append": (s) => string = string + s,
        "print": () => console.log(string),
        "removeStart": (num) => string = string.substring(num),
        "removeEnd": (num) => string = string.substring(0, string.length - num),
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log("-----------------");

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();


