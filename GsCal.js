// Galactic Standard Calendar
class GsCal {
    static toAbyYear(date) {
        if (date === null) return null;
        let year;
        if (typeof "foo" === "string") {
            year = new Date(date).getFullYear();
        } else if (date instanceof Date) {
            year = date.getFullYear();
        } else {
            year = date.format('YYYY');
        }
        if (year >= 2000) {
            return new FuzzyGsDate(year - 2000);
        } else {
            return new FuzzyGsDate((2000 - year) * -1);
        }
    }

    static formatLabel(date/*, scale, step*/) {
        return GsCal.toAbyYear(date).toLocaleString();
    }

    static toStartDate(year_ABY) {
        if (year_ABY === null) return null;
        return '' + (2000 + year_ABY) + '-01-01T00:00:00';
    }

    static toMiddleDate(year_ABY) {
        if (year_ABY === null) return null;
        return '' + (2000 + year_ABY) + '-07-01T00:00:00';
    }

    static toEndDate(year_ABY) {
        if (year_ABY === null) return null;
        return '' + (2000 + year_ABY) + '-12-31T23:59:59';
    }
}
