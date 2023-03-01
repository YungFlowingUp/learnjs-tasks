const age = 91;

if (age < 14 || age > 90){
    console.log("Не в диапазоне между 14 и 90");
}
else {
    console.log("В диапазоне между 14 и 90");
}


if (!(age >= 14 && age <= 90)){
    console.log("Не в диапазоне между 14 и 90");
}
else {
    console.log("В диапазоне между 14 и 90");
}