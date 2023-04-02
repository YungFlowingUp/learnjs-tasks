const animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

const collator = new Intl.Collator();
animals.sort((a, b) => collator.compare(a, b));

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК