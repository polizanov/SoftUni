function getFibonator(){
    let start = 0;
    let next = 1;


    return () => {
        let fibNum = start + next;
        start = next;
        next = fibNum;
        return start
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13


