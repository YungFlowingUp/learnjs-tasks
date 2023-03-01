function getSecondsToTomorrow() {
    const nowDate = new Date();
    const tomorrow = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate()+1);

    let sec = tomorrow - nowDate; 
    return Math.round(sec / 1000)
}

console.log(getSecondsToTomorrow());