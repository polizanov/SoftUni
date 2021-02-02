function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
        console.log(Array.isArray(arr))
    return sum;
}

module.exports = sum;