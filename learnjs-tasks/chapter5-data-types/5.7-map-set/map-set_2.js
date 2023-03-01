function aclean(arr) {
    const map = new Map();

    for (let item of arr) {
        const sorted = item.toLowerCase().split("").sort().join("");
        map.set(sorted, item);
    }
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));