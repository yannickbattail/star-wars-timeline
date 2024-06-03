function characterToItem(character) {
    const alive = character.death === null;
    const born = character.birth !== null;
    const className = (born?"":"n")+(alive?"born-alive":"born-dead");
    const content = character.name
        + " (" + (born ? ("*"+character.birth) : character.aliveBefore)
        + " - " + (alive ? character.aliveAfter : ("†" + character.death)) + ")";
    return {
        id: character.name,
        content: content,
        title: content,
        start: toStartDate(born ? character.birth : (character.aliveBefore - 20)),
        end: toStartDate(alive ? character.aliveAfter + 10 : character.death),
        className: className,
        group: "Characters",
        editable: { updateTime: false, updateGroup: false, remove: true }
    };
}

function OLD_characterToItem(character) {
    let dateStart = character.birth;
    let dateEnd = character.death !== null ? character.death : character.birth + 100;
    let items = [];
    let age = 0;
    for (let i = dateStart; i <= dateEnd; i++) {
        items.push({
            id: character.name + "_ITEM_" + i,
            content: "" + age,
            title: character.name,
            start: toStartDate(i),
            end: toEndDate(i),
            group: character.name + "_GR"
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
        start: toMiddleDate(event.start),
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
        start: toMiddleDate(era.start),
        end: toMiddleDate(era.end),
        type: 'background',
        className: era.className
    };
}

function filmToItem(film) {
    return {
        id: film.name,
        content: film.name,
        title: film.name,
        start: toMiddleDate(film.start),
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
        start: toStartDate(serie.start),
        end: toEndDate(serie.end),
        type: 'range',
        group: 'TV Series'
    };
}
