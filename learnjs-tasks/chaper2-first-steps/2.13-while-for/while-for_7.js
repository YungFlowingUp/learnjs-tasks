const n = 15;

loop:
for (let i = 2; i <= n; i++){
    for (let j = 2; j <= i/2; j++){
        if (i % j == 0){
            continue loop
        }
    }
    console.log(i);
}