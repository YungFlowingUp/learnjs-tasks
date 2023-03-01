const calculator = {
    read() {
        this.a = +prompt("Введите первое значение", "5");
        this.b = +prompt("Введите второе значение", "10");        
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};