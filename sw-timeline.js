const characters = charactersData.map(c => new Character(c));

const groups = new vis.DataSet();

groups.add([
    {
        id: "ERA",
        content: "ERA"
    },
    {
        id: "Events",
        content: "Events"
    },
    {
        id: "Films",
        content: "Films"
    },
    {
        id: "TV Series",
        content: "TV Series"
    },
    {
        id: "Characters",
        content: "Characters"
    }
]);

// const characterGroups = characters.map(character => {
//         return {
//             id: character.name + "_GR",
//             content: character.name
//         };
//     }
// );
// groups.add(characterGroups);

const items = new vis.DataSet({type: {start: 'ISODate', end: 'ISODate'}});
items.add(events.map(event => eventToItem(event)));
items.add(eras.map(era => eraToItem(era)));
items.add(films.map(film => filmToItem(film)));
items.add(series.map(serie => serieToItem(serie)));
//items.add(characters.map(character => characterToItem(character)));
//items.add(characters.flatMap(character => OLD_characterToItem(character)));

const container = document.getElementById('timelineContainer');
const options = {
    //stack: false,
    // orientation:'top'
    start: GsCal.toStartDate(-40),
    end: GsCal.toEndDate(40),
    timeAxis: {
        scale: 'year',
        step: 1
    },
    format: {
        minorLabels: GsCal.formatLabel,
        majorLabels: GsCal.formatLabel
    },
    showCurrentTime: false,
    selectable: true,
    showTooltips: true,
    tooltip: {
        followMouse: true
    }
};

const timeline = new vis.Timeline(container, items, groups, options);
// timeline.addCustomTime(GsCal.toMiddleDate(-19), 'line_order66');
timeline.addCustomTime(GsCal.toMiddleDate(0), 'line_time0');
// timeline.addCustomTime(GsCal.toMiddleDate(9), 'mandoverse');
// timeline.addCustomTime(GsCal.toMiddleDate(34), 'resistance');

document.getElementById('timelineContainer').onmouseover = function (event) {
    const props = timeline.getEventProperties(event);
    if (props.what === 'item') {
        const item = items.get(props.item);
        if (item && item.group === "Characters") {
            const precis = item.className.startsWith("n") ? "≈" : "";
            item.title = item.content + " Age: " + precis + (GsCal.toAbyYear(props.snappedTime) - GsCal.toAbyYear(item.start));
            items.update(item);
        }
    }
}

function characterToDataList() {
    let dataListOption = "";
    for (const character of characters) {
        dataListOption += '<option value="' + character.name + '">';
        if (character.birth === null && character.aliveBefore === null) {
            console.warn('for a character birth or aliveBefore must be defined');
        }
        if (character.death === null && character.aliveAfter === null) {
            console.warn('for a character death or aliveAfter must be defined');
        }
    }
    return dataListOption;
}

document.getElementById('characterDataList').innerHTML = characterToDataList();

function showCharacter() {
    if (!document.getElementById('characterSearch')) return;
    if (!document.getElementById('characterSearch').value) return;

    const characterName = document.getElementById('characterSearch').value;
    let character = characters.find(char => char.name === characterName);
    if (character) {
        if (document.getElementById('showAge') && document.getElementById('showAge').checked) {
            groups.add(character.toGroup());
            items.add(character.toItemAge());
        } else {
            items.add(character.toItem());
        }

    }
}
