function getMaxSubSum(arr) {
    let max = 0;
    let temp = 0;

    for (let item of arr) {
        temp += item;
        max = Math.max(max, temp);
        if (temp < 0) {
            temp = 0;
        }
    }

    return max
}

console.log(getMaxSubSum([-1, -9]));