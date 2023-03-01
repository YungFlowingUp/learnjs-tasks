function pow(x, n){
    if (n < 1 || !(Number.isInteger(n)))
        return "Значение " + n + " не является целым или менее 1"
    let temp = x;
    for (let i = 1; i < n; i++){
        x *= temp;
    }
    return x
}

console.log(pow(3, 5));