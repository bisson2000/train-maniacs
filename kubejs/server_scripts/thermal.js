// priority: 0

ServerEvents.recipes(event => {

    // gears
    [
        ["thermal:iron_gear"],
        ["thermal:gold_gear"],
        ["thermal:copper_gear"],
        ["thermal:netherite_gear"],
        ["thermal:tin_gear"],
        ["thermal:lead_gear"],
        ["thermal:silver_gear"],
        ["thermal:nickel_gear"],
        ["thermal:steel_gear"],
        ["thermal:rose_gold_gear"],
        ["thermal:bronze_gear"],
        ["thermal:electrum_gear"],
        ["thermal:invar_gear"],
        ["thermal:constantan_gear"],
        ["thermal:signalum_gear"],
        ["thermal:lumium_gear"],
        ["thermal:enderium_gear"],
    ].forEach((removedOutputInfo) => {
        const [removedOutput] = removedOutputInfo;
        //event.forEachRecipe({mod:"thermal"}, (recipe) => {
        //    console.info(`recipe: ${recipe.json}`);
        //});
        event.remove({mod:"thermal", type:"minecraft:crafting_shaped", output: removedOutput});
    });

    // modify machine frame base recipe
    //event.replaceInput({id:"thermal:machine_frame"}, {item: "minecraft:iron_ingot"}, {item: "kubejs:flux_induced_iron"});

});