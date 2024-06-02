function characterToItems(character) {
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
