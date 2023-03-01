function getDateAgo(date, days) {
    const temp = new Date(date);
    temp.setDate(date.getDate() - days);
    
    return temp.getDate()
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));