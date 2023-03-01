function Calculator() {
    this.read = function() {
        this.a = +prompt("Введите первое значение", "5");
        this.b = +prompt("Введите второе значение", "10");        
    },
    this.sum = function() {
        return this.a + this.b
    },
    this.mul = function() {
        return this.a * this.b
    }
}

const calc = new Calculator();