const groups = new vis.DataSet();

groups.add([
    {
        id: "Events",
        content: "Events"
    },
    {
        id: "ERA",
        content: "ERA"
    },
    {
        id: "Films",
        content: "Films"
    },
    {
        id: "TV Series",
        content: "TV Series"
    }
]);

const characterGroups = characters.map(character => {
        return {
            id: character.name + "_GR",
            content: character.name
        };
    }
);
groups.add(characterGroups);

const items = new vis.DataSet({type: {start: 'ISODate', end: 'ISODate'}});
items.add(events.map(event => eventToItem(event)));
items.add(eras.map(era => eraToItem(era)));
items.add(films.map(film => filmToItem(film)));
items.add(series.map(serie => serieToItem(serie)));
items.add(characters.map(character => characterToItem(character)));
//items.add(characters.flatMap(character => OLD_characterToItem(character)));

const container = document.getElementById('visualization');
const options = {
    //stack: false,
    // orientation:'top'
    start: toStartDate(-40),
    end: toEndDate(40),
    timeAxis: {
        scale: 'year',
        step: 1
    },
    format: {
        minorLabels: formatLabel,
        majorLabels: formatLabel
    },
    showCurrentTime: false,
    selectable: true,
};

const timeline = new vis.Timeline(container, items, groups, options);
timeline.addCustomTime(toMiddleDate(-19), 'line_order66');
timeline.addCustomTime(toMiddleDate(0), 'line_time0');
timeline.addCustomTime(toMiddleDate(9), 'mandoverse');
timeline.addCustomTime(toMiddleDate(34), 'resistance');
