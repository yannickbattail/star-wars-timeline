
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

    toItem() {
        const className = (this.IsBirthKnown() ? "" : "n") + (this.IsDeathKnown() ? "born-dead" : "born-alive" );
        const title = this.name
            + " (" + (this.IsBirthKnown() ? ("*" + this.birth.format()) : this.aliveBefore.format())
            + " - " + (this.IsDeathKnown() ?  ("†" + this.death.format()) : this.aliveAfter.format()) + ") " + this.comments;
        // TODO add url and image
        return {
            id: this.name,
            content: this.name,
            title: title,
            start: GsCal.toStartDate(this.birth.gsDate !== null ? this.birth.getRangeStart() : this.aliveBefore.getRangeStart()),
            end: GsCal.toStartDate(this.death.gsDate !== null ? this.death.getRangeEnd() : this.aliveAfter.getRangeEnd()),
            className: className,
            group: "Characters",
            editable: {updateTime: false, updateGroup: false, remove: true}
        };
    }

    toItemAge() {
        const title = this.name
            + " (" + (this.IsBirthKnown() ? ("*" + this.birth) : this.aliveBefore)
            + " - " + (this.IsDeathKnown() ? this.aliveAfter : ("†" + this.death)) + ")";
        let dateStart = this.IsBirthKnown() ? this.birth : (this.aliveBefore - 20);
        let dateEnd = this.IsDeathKnown() ? this.aliveAfter + 10 : this.death;
        const around = this.IsBirthKnown() ? "" : "≈";
        let items = [];
        let age = 0;
        for (let i = dateStart; i <= dateEnd; i++) {
            items.push({
                id: this.name + "_ITEM_" + i,
                content: "" + (i === this.death ? "† " : "") + (i === this.birth ? "* " : "") + around + age,
                title: title,
                start: GsCal.toStartDate(i),
                end: GsCal.toEndDate(i),
                group: this.name + "_GR",
                editable: {updateTime: false, updateGroup: false, remove: true}
            });
            age++;
        }
        return items;
    }

    toGroup() {
        return {
            id: this.name + "_GR",
            content: this.name
        };
    }
}
