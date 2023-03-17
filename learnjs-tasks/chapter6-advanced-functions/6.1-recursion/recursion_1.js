function loopSumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}

function recursionSumTo(n) {
    return n == 1 ? n : n += recursionSumTo(n-1)
}

function aProgSumTo(n) {
    return (n + n*n) / 2
}

console.log(loopSumTo(5));
console.log(recursionSumTo(5));
console.log(aProgSumTo(5));