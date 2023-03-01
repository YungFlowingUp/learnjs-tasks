function getSecondsToday() {
    const nowDate = new Date();
    const beginingOfToday = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate());

    let sec = nowDate - beginingOfToday;
    return Math.round(sec / 1000)
}

console.log(getSecondsToday());