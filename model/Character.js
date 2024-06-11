
class Character {
    #name = "";
    #birth= 0;
    #aliveBefore= 0;
    #aliveAfter= 0;
    #death= 0;
    #keywords= [];

    constructor(obj) {
        this.#name = obj.name;
        this.#birth = obj.birth;
        this.#aliveBefore = obj.aliveBefore;
        this.#aliveAfter = obj.aliveAfter;
        this.#death = obj.death;
        this.#keywords = obj.keywords;
        if (obj.birth === null && obj.aliveBefore === null) {
            throw "birth or aliveBefore must be defined for character: "+this.#name;
        }
        if (obj.death === null && obj.aliveAfter === null) {
            throw "death or aliveAfter must be defined for character: "+this.#name;
        }
        if (obj.birth !== null && obj.aliveBefore !== null) {
            console.warn("birth xor aliveBefore must be defined for character: "+this.#name);
        }
        if (obj.death !== null && obj.aliveAfter !== null) {
            console.warn("death xor aliveAfter must be defined for character: "+this.#name);
        }
    }
    get name() {
        return this.#name;
    }
    set name(value) {
        if (!value) {
            throw "name is not defined";
        }
        this.#name = value;
    }

    get birth() {
        return this.#birth;
    }
    set birth(value) {
        this.#birth = value;
    }

    get aliveBefore() {
        return this.#aliveBefore;
    }
    set aliveBefore(value) {
        this.#aliveBefore = value;
    }

    get aliveAfter() {
        return this.#aliveAfter;
    }
    set aliveAfter(value) {
        this.#aliveAfter = value;
    }

    get death() {
        return this.#death;
    }
    set death(value) {
        this.#death = value;
    }

    get keywords() {
        return this.#keywords;
    }
    set keywords(value) {
        this.#keywords = value;
    }

    toItem() {
        const alive = this.death === null;
        const born = this.birth !== null;
        const className = (born ? "" : "n") + (alive ? "born-alive" : "born-dead");
        const title = this.name
            + " (" + (born ? ("*" + this.birth) : this.aliveBefore)
            + " - " + (alive ? this.aliveAfter : ("†" + this.death)) + ")";
        return {
            id: this.name,
            content: this.name,
            title: title,
            start: GsCal.toStartDate(born ? this.birth : (this.aliveBefore - 20)),
            end: GsCal.toStartDate(alive ? this.aliveAfter + 10 : this.death),
            className: className,
            group: "Characters",
            editable: {updateTime: false, updateGroup: false, remove: true}
        };
    }

    toItemAge() {
        const alive = this.death === null;
        const born = this.birth !== null;
        const title = this.name
            + " (" + (born ? ("*" + this.birth) : this.aliveBefore)
            + " - " + (alive ? this.aliveAfter : ("†" + this.death)) + ")";
        let dateStart = born ? this.birth : (this.aliveBefore - 20);
        let dateEnd = alive ? this.aliveAfter + 10 : this.death;
        const around = born ? "" : "≈";
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
