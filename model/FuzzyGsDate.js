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
    precision = 0;

    constructor(gsDate, precision = 0) {
        this.precision = precision;
        this.gsDate = gsDate;
    }

    format() {
        const precis = this.precision ? " ±" + this.precision : "";
        if (this.gsDate >= 0) {
            return "" + this.gsDate+precis + " ABY";
        } else {
            return "" + (this.gsDate * -1)+precis + " BBY";
        }
    }

    formatAge() {
        return "" + this.gsDate+(this.precision ? " ±" + this.precision : "");
    }

    getRangeStart() {
        return this.gsDate - this.precision;
    }

    getRangeEnd() {
        return this.gsDate + this.precision;
    }

    diff(gsDate) {
        return new FuzzyGsDate(this.gsDate - gsDate.gsDate, this.precision + gsDate.precision);
    }

    isNull() {
        return this.gsDate === null;
    }
    isAvailable() {
        return this.gsDate !== null;
    }
    isAccurate() {
        return this.gsDate !== null && this.precision === 0;
    }
}
