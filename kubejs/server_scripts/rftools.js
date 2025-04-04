// priority: 0

ServerEvents.recipes(event => {

    //event.forEachRecipe({mod: "rftoolsutility"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //    console.info(`recipe: ${recipe.getId()}`);
    //});

    event.remove({mod: "rftoolsbase", id: "rftoolsbase:machine_frame"});
    event.shaped(Item.of("rftoolsbase:machine_frame", 1), [
        "IBI",
        "GFG",
        "IBI"
    ], {
        I: "#forge:plates/iron",
        G: "#forge:nuggets/gold",
        B: "#forge:dyes/blue",
        F: "thermal:machine_frame",
    });

    event.remove({mod: "rftoolsutility", id: "rftoolsutility:crafter2"});
    event.shaped(Item.of("rftoolsutility:crafter2", 1), [
        " T ",
        "CMC",
        " T "
    ], {
        C: "minecraft:crafting_table",
        M: "rftoolsutility:crafter1",
        T: "create:polished_rose_quartz",
    });

    event.remove({mod: "rftoolsutility", id: "rftoolsutility:crafter3"});
    event.shaped(Item.of("rftoolsutility:crafter3", 1), [
        " T ",
        "CMC",
        " T "
    ], {
        C: "minecraft:crafting_table",
        M: "rftoolsutility:crafter2",
        T: "ad_astra:desh_engine",
    });


});