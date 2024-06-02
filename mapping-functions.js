function characterToItem(character) {
    return {
        id: character.name,
        content: character.name,
        start: toStartDate(character.birth),
        end: toStartDate(character.death!==null?character.death:character.birth+100),
        group: character.name + "_GR"
    };
}

function OLD_characterToItem(character) {
    let dateStart = character.birth;
    let dateEnd = character.death!==null?character.death:character.birth+100;
    let items = [];
    let age = 0;
    for (let i = dateStart; i <= dateEnd; i++) {
        items.push({
            id: character.name + "_ITEM_"+i,
            content: ""+age,
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
        start: toStartDate(era.start),
        end: toEndDate(era.end),
        type: 'range',
        group: 'ERA'
    };
}

function filmToItem(film) {
    return {
        id: film.name,
        content: film.name,
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
        start: toStartDate(serie.start),
        end: toEndDate(serie.end),
        type: 'range',
        group: 'TV Series'
    };
}
