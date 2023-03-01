function unique(arr) {
    const output = [];

    for (let item of arr) {
        if (!output.includes(item)) output.push(item)
    }

    return output
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
