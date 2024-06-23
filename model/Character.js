class Character {
    name = "";
    birth = new FuzzyGsDate(null);
    aliveBefore = new FuzzyGsDate(null);
    aliveAfter = new FuzzyGsDate(null);
    death = new FuzzyGsDate(null);
    keywords = [];
    url = "";
    image = "";
    comments = "";
    firstDate= new FuzzyGsDate(null);
    lastDate= new FuzzyGsDate(null);
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
        this.firstDate = this.birth.isAvailable() ? this.birth : (this.aliveBefore? new FuzzyGsDate(this.aliveBefore - 30, 10): new FuzzyGsDate(this.aliveAfter - 30, 10));
        this.lastDate = this.death.isAvailable() ? this.death : (this.aliveAfter? new FuzzyGsDate(this.aliveAfter + 20, 10): new FuzzyGsDate(this.aliveBefore + 20, 10));
        // item properties
        this.id = this.name;
        this.content = this.name;
        this.title = this.buildTitle(null);
        this.start = GsCal.toStartDate(this.firstDate.getRangeStart());
        this.end = GsCal.toEndDate(this.lastDate.getRangeEnd());
        this.className = (this.IsBirthKnown() ? "" : "n") + (this.IsDeathKnown() ? "born-dead" : "born-alive");
        this.group = "Characters";
        this.editable = {updateTime: false, updateGroup: false, remove: true};

        this.validate();
    }

    validate() {
        if (!this.name) {
            throw "name is not defined";
        }
        if (!this.url) {
            console.warn("no url for character: " + this.name + " is defined");
        }
        if (this.birth.isNull() && this.aliveBefore.isNull()) {
            console.warn("Both birth and aliveBefore are null for character: " + this.name + " is defined");
        }
        if (this.birth.gsDate && this.death.gsDate && this.birth.gsDate > this.death.gsDate) {
            console.warn("death is before birth for character: " + this.name);
        }
        if (this.birth.gsDate && this.aliveBefore.gsDate && this.birth.gsDate > this.aliveBefore.gsDate) {
            console.warn("aliveBefore is before birth for character: " + this.name);
        }
        if (this.death.gsDate && this.aliveAfter.gsDate && this.aliveAfter.gsDate > this.death.gsDate) {
            console.warn("aliveAfter is after death for character: " + this.name);
        }
        if (this.aliveBefore.gsDate && this.aliveAfter.gsDate && this.aliveBefore.gsDate > this.aliveAfter.gsDate) {
            console.warn("aliveBefore is after aliveAfter for character: " + this.name);
        }
        if (this.firstDate.isNull()) {
            console.warn("firstDate is null for character: " + this.name);
        }
        if (this.lastDate.isNull()) {
            console.warn("lastDate is null for character: " + this.name);
        }
    }

    IsBirthKnown() {
        return this.birth.isAccurate();
    }

    IsDeathKnown() {
        return this.death.isAccurate();
    }

    updateOnMouseOver(event, eventProperties) {
        this.title = this.buildTitle(GsCal.toAbyYear(eventProperties.snappedTime));
    }

    buildTitle(ageAt = null) {
        const ageText = ageAt !== null ? (" "+ageAt.diff(this.firstDate).formatAge()+" years old"):"";
        return this.name + ageText +
            " (*" + ( this.birth.isAvailable() ? this.birth.format() : "???") +
            " - †" + ( this.death.isAvailable() ? this.death.format() : "???") + ") "
            + this.comments;
    }
}
