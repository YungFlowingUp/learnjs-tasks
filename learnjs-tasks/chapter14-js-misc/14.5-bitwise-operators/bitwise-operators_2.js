function isInteger(num) {
    if ((num ^ 0) === num) {
        return true
    }
    return false
}

console.log(isInteger(1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(-0.5)); // false