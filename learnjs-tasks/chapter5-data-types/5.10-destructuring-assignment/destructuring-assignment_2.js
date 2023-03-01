let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = null;
    let temp = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        if (temp < salary) {
            temp = salary;
            max = name;
        }
    }

    return max
}

console.log(topSalary(salaries));