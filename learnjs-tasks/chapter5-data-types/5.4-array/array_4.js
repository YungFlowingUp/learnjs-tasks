function sumInput() {
    const output = [];
            
    while (true) {
        let value = prompt("Введите число", "5");                 
        if (value === null || value === "" || !isFinite(value)) {
            break
        }
        output.push(+value);           
        }

    let sum = 0;

    for (let temp of output) {
        sum += temp;
    }   
    return sum
}