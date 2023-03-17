function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });    
}
  
delay(1500).then(() => console.log('выполнилось через 1.5 секунды'));