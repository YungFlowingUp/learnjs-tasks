function formatDate(date) {
    const timePassed = new Date() - date;
    const secs = Math.floor(timePassed/1000);

    if (secs < 1) {
        return "прямо сейчас"
    }

    const mins = Math.floor(secs/60);   
    if (mins < 1) {
        return secs + " секунд назад"
    }

    if (mins < 60) {
        return mins + " минут назад"
    }

    let formated = date;
    formated = [
    '0' + formated.getDate(),
    '0' + (formated.getMonth() + 1),
    '' + formated.getFullYear(),
    '0' + formated.getHours(),
    '0' + formated.getMinutes()
    ].map(value => value.slice(-2));

    return formated.slice(0, 3).join('.') + ' ' + formated.slice(3).join(':');      
}
