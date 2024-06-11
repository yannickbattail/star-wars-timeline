function characterToItem(character) {
    const alive = character.death === null;
    const born = character.birth !== null;
    const className = (born ? "" : "n") + (alive ? "born-alive" : "born-dead");
    const title = character.name
        + " (" + (born ? ("*" + character.birth) : character.aliveBefore)
        + " - " + (alive ? character.aliveAfter : ("†" + character.death)) + ")";
    return {
        id: character.name,
        content: character.name,
        title: title,
        start: GsCal.toStartDate(born ? character.birth : (character.aliveBefore - 20)),
        end: GsCal.toStartDate(alive ? character.aliveAfter + 10 : character.death),
        className: className,
        group: "Characters",
        editable: {updateTime: false, updateGroup: false, remove: true}
    };
}

function characterAgeToItem(character) {
    const alive = character.death === null;
    const born = character.birth !== null;
    const title = character.name
        + " (" + (born ? ("*" + character.birth) : character.aliveBefore)
        + " - " + (alive ? character.aliveAfter : ("†" + character.death)) + ")";
    let dateStart = born ? character.birth : (character.aliveBefore - 20);
    let dateEnd = alive ? character.aliveAfter + 10 : character.death;
    const around = born ? "" : "≈";
    let items = [];
    let age = 0;
    for (let i = dateStart; i <= dateEnd; i++) {
        items.push({
            id: character.name + "_ITEM_" + i,
            content: "" + (i === character.death ? "† " : "") + (i === character.birth ? "* " : "") + around + age,
            title: title,
            start: GsCal.toStartDate(i),
            end: GsCal.toEndDate(i),
            group: character.name + "_GR",
            editable: {updateTime: false, updateGroup: false, remove: true}
        });
        age++;
    }
    return items;
}

function eventToItem(event) {
    return {
        id: event.name,
        content: event.name,
        title: event.name,
        start: GsCal.toMiddleDate(event.start),
        end: null,
        type: 'point',
        group: 'Events'
    };
}

function eraToItem(era) {
    return {
        id: era.name,
        content: era.name,
        title: era.name,
        start: GsCal.toMiddleDate(era.start),
        end: GsCal.toMiddleDate(era.end),
        type: 'background',
        className: era.className
    };
}

function filmToItem(film) {
    return {
        id: film.name,
        content: film.name,
        title: film.name,
        start: GsCal.toMiddleDate(film.start),
        end: null,
        type: 'point',
        group: 'Films'
    };
}

function serieToItem(serie) {
    return {
        id: serie.name,
        content: serie.name,
        title: serie.name,
        start: GsCal.toStartDate(serie.start),
        end: GsCal.toEndDate(serie.end),
        type: 'range',
        group: 'TV Series'
    };
}
