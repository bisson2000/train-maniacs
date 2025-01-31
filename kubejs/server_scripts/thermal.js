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

    // Creosote
    event.forEachRecipe({mod: "thermal", type:"thermal:pyrolyzer"}, recipe => {
        console.info(`recipe: ${recipe.json}`);
        if (recipe.json && recipe.json.getAsJsonArray("result")) {
            recipe.json.getAsJsonArray("result").forEach(res => {
                if (res.asJsonObject && res.asJsonObject.get("fluid") && res.asJsonObject.get("fluid").asString === "thermal:creosote") {
                    res.asJsonObject.remove("fluid");
                    res.asJsonObject.addProperty("fluid", "immersiveengineering:creosote");
                    recipe.save();
                }
            });
        }
    });
});

ServerEvents.tags('item', event => {
    event.add("minecraft:coals", "thermal:coal_coke");
})