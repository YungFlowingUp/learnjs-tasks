function camelize(str) {
    const arr = str.split('-');
    return arr.map((word, i) => i == 0 ? word : word.at(0).toUpperCase() + word.slice(1)).join(""); 
}

console.log(camelize("-webkit-transition"));