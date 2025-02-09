// priority: 0

ServerEvents.recipes(event => {

    //event.forEachRecipe({mod: "hostilenetworks"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //});

    // remove ores generated, as well as end stone
    event.remove({mod: "hostilenetworks", id: "hostilenetworks:living_matter/overworldian/iron_ingot"});
    event.remove({mod: "hostilenetworks", id: "hostilenetworks:living_matter/overworldian/prismarine"});
    event.remove({mod: "hostilenetworks", id: "hostilenetworks:living_matter/hellish/gold_ingot"});
    event.remove({mod: "hostilenetworks", id: "hostilenetworks:living_matter/extraterrestrial/end_stone"});
    event.remove({mod: "hostilenetworks", id: "hostilenetworks:living_matter/twilight/liveroot"});
});