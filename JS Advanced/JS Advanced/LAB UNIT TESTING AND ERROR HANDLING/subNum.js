function subNum(arr, startIndex, endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }

    if(startIndex < 0){
        startIndex = 0;
    }

    if(endIndex >= arr.length){
        endIndex = arr.length - 1;
    }

    return arr
    .map(x => Number(x))
    .slice(startIndex, endIndex + 1)
    .reduce((acc, a) => acc + a, 0);
}

console.log(subNum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subNum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subNum([10, 'twenty', 30, 40], 0, 2));
console.log(subNum([], 1, 2));
console.log(subNum('text', 0, 2));