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

    // oil
    event.forEachRecipe({mod: "thermal", type:"thermal:centrifuge"}, recipe => {
        if (recipe.json && recipe.json.getAsJsonArray("result")) {
            recipe.json.getAsJsonArray("result").forEach(res => {
                if (res.asJsonObject && res.asJsonObject.get("fluid") && res.asJsonObject.get("fluid").asString === "thermal:crude_oil") {
                    res.asJsonObject.remove("fluid");
                    res.asJsonObject.addProperty("fluid", "pneumaticcraft:oil");
                    recipe.save();
                }
            });
        }
    });

    // redstone
    event.remove({mod: "thermal", id: "thermal:compat/create/bottler_create_redstone"});

    // lava
    event.remove({mod: "thermal", id: "thermal:machines/crucible/crucible_netherrack_to_lava"});

    // ender dust:
    event.replaceOutput({mod: "thermal", id: "thermal:earth_charge/ender_pearl_dust_from_ender_pearl"}, "thermal:ender_pearl_dust", "ae2:ender_dust");
    event.replaceOutput({mod: "thermal", id: "thermal:machines/pulverizer/pulverizer_ender_pearl"}, "thermal:ender_pearl_dust", "ae2:ender_dust");

    //event.forEachRecipe({mod:"thermal"}, (recipe) => {
    //    console.info(`recipe: ${recipe.json}`);
    //});

    // cinder flour
    //event.recipes.thermal.
});

ServerEvents.tags('item', event => {
    event.add("minecraft:coals", "thermal:coal_coke");
})