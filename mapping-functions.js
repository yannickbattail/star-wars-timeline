
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
