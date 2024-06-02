
function formatLabel(date, scale, step) {
    if (date === null) return null;
    let year = date.format('YYYY');
    if (year >= 2000) {
        return ""+(year - 2000)+" ABY"
    } else {
        return ""+(2000 - year)+" BBY"
    }
}

function toStartDate(year_ABY) {
    if (year_ABY === null) return null;
    return ''+(2000+year_ABY)+'-01-01T00:00:00';
}
function toMiddleDate(year_ABY) {
    if (year_ABY === null) return null;
    return ''+(2000+year_ABY)+'-07-01T00:00:00';
}
function toEndDate(year_ABY) {
    if (year_ABY === null) return null;
    return ''+(2000+year_ABY)+'-12-31T23:59:59';
}
