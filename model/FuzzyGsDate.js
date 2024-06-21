/**
 * Fuzzy Galactic standard Date
 */
class FuzzyGsDate {

    /**
     * galactic standard date
     */
    gsDate = 0;

    /**
     * precision in year
     */
    precision= 0;

    constructor(gsDate, precision=0) {
        this.precision = precision;
        this.gsDate = gsDate;
    }

    format() {
        const precis = this.precision? " ±"+this.precision: "";
        if (this.gsDate >= 0) {
            return "" + this.gsDate + " ABY"+precis;
        } else {
            return "" + (this.gsDate * -1) + " BBY"+precis;
        }
    }

    getRange() {
        return {
            start:this.gsDate - this.precision,
            middle: this.gsDate,
            end: this.gsDate + this.precision
        };
    }
    getRangeStart() {
        return this.gsDate - this.precision;
    }
    getRangeEnd() {
        return this.gsDate + this.precision;
    }

}
