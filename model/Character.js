
class Character {
    name = "";
    birth= new FuzzyGsDate(null);
    aliveBefore=  new FuzzyGsDate(null);
    aliveAfter=  new FuzzyGsDate(null);
    death= new FuzzyGsDate(null);
    keywords= [];
    url = "";
    image = "";
    comments = "";
    // item properties
    id = "";
    content = "";
    title = "";
    start = new Date();
    end = new Date();
    className = "";
    group = "";
    editable = {};

    constructor(obj) {
        this.name = obj.name;
        this.birth = new FuzzyGsDate(obj.birth.gsDate, obj.birth.precision);
        this.aliveBefore = new FuzzyGsDate(obj.aliveBefore.gsDate, obj.aliveBefore.precision);
        this.aliveAfter = new FuzzyGsDate(obj.aliveAfter.gsDate, obj.aliveAfter.precision);
        this.death = new FuzzyGsDate(obj.death.gsDate, obj.death.precision);
        this.keywords = obj.keywords;
        this.url = obj.url;
        this.image = obj.image;
        this.comments = obj.comments;
        this.validate();

        this.id = this.name;
        this.content = this.name;
        this.title = this.name
            + " (" + (this.IsBirthKnown() ? ("*" + this.birth.format()) : this.aliveBefore.format())
            + " - " + (this.IsDeathKnown() ? ("†" + this.death.format()) : this.aliveAfter.format()) + ") " + this.comments;
        this.start = GsCal.toStartDate(this.birth.gsDate !== null ? this.birth.getRangeStart() : this.aliveBefore.getRangeStart());
        this.end = GsCal.toStartDate(this.death.gsDate !== null ? this.death.getRangeEnd() : this.aliveAfter.getRangeEnd());
        this.className = (this.IsBirthKnown() ? "" : "n") + (this.IsDeathKnown() ? "born-dead" : "born-alive");
        this.group = "Characters";
        this.editable = {updateTime: false, updateGroup: false, remove: true};
    }

    validate() {
        if (!this.name) {
            throw "name is not defined";
        }
        if (!this.url) {
            console.warn("no url for character: "+this.name+" is defined");
        }
        if (this.birth.gsDate && this.death.gsDate && this.birth.gsDate > this.death.gsDate) {
            console.warn("death is before birth for character: "+this.name);
        }
        if (this.birth.gsDate && this.aliveBefore.gsDate && this.birth.gsDate > this.aliveBefore.gsDate) {
            console.warn("aliveBefore is before birth for character: "+this.name);
        }
        if (this.death.gsDate && this.aliveAfter.gsDate && this.aliveAfter.gsDate > this.death.gsDate) {
            console.warn("aliveAfter is after death for character: "+this.name);
        }
        if (this.aliveBefore.gsDate && this.aliveAfter.gsDate && this.aliveBefore.gsDate > this.aliveAfter.gsDate) {
            console.warn("aliveBefore is after aliveAfter for character: "+this.name);
        }
    }

    IsBirthKnown() {
        return this.birth.gsDate != null && this.birth.precision === 0;
    }
    IsDeathKnown() {
        return this.death.gsDate != null && this.death.precision === 0;
    }

    toGroup() {
        return {
            id: this.name + "_GR",
            content: this.name
        };
    }
}
