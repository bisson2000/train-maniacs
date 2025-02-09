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

    // add nuggets
    [
        ["minecraft:netherite_ingot", "createdeco:netherite_nugget"],
        ["createbigcannons:cast_iron_ingot", "createbigcannons:cast_iron_nugget"],
        ["createbigcannons:nethersteel_ingot", "createbigcannons:nethersteel_nugget"],
        ["createdeco:industrial_iron_ingot", "createdeco:industrial_iron_nugget"],
        ["tconstruct:rose_gold_ingot", "tconstruct:rose_gold_nugget"],
        ["ad_astra:desh_ingot", "ad_astra:desh_nugget"],
        ["ad_astra:ostrum_ingot", "ad_astra:ostrum_nugget"],
        ["ad_astra:calorite_ingot", "ad_astra:calorite_nugget"],
        ["botania:manasteel_ingot", "botania:manasteel_nugget"],
        ["botania:terrasteel_ingot", "botania:terrasteel_nugget"],
        ["botania:elementium_ingot", "botania:elementium_nugget"],
        ["embers:dawnstone_ingot", "embers:dawnstone_nugget"],
        ["nuclearcraft:magnesium_ingot", "nuclearcraft:magnesium_nugget"],
        ["nuclearcraft:cobalt_ingot", "nuclearcraft:cobalt_nugget"],
        ["nuclearcraft:lithium_ingot", "nuclearcraft:lithium_nugget"],
        ["nuclearcraft:platinum_ingot", "nuclearcraft:platinum_nugget"],
        ["nuclearcraft:thorium_ingot", "nuclearcraft:thorium_nugget"],
        ["nuclearcraft:beryllium_ingot", "nuclearcraft:beryllium_nugget"],
        ["nuclearcraft:zirconium_ingot", "nuclearcraft:zirconium_nugget"],
        ["nuclearcraft:boron_ingot", "nuclearcraft:boron_nugget"],
        ["draconicevolution:draconium_ingot", "draconicevolution:draconium_nugget"],
        ["draconicevolution:awakened_draconium_ingot", "draconicevolution:awakened_draconium_nugget"],
        ["enderio:copper_alloy_ingot", "enderio:copper_alloy_nugget"],
        ["enderio:energetic_alloy_ingot", "enderio:energetic_alloy_nugget"],
        ["enderio:vibrant_alloy_ingot", "enderio:vibrant_alloy_nugget"],
        ["enderio:redstone_alloy_ingot", "enderio:redstone_alloy_nugget"],
        ["enderio:conductive_alloy_ingot", "enderio:conductive_alloy_nugget"],
        ["enderio:pulsating_alloy_ingot", "enderio:pulsating_alloy_nugget"],
        ["enderio:dark_steel_ingot", "enderio:dark_steel_nugget"],
        ["enderio:soularium_ingot", "enderio:soularium_nugget"],
        ["enderio:end_steel_ingot", "enderio:end_steel_nugget"],
        ["extendedcrafting:black_iron_ingot", "extendedcrafting:black_iron_nugget"],
        ["extendedcrafting:redstone_ingot", "extendedcrafting:redstone_nugget"],
        ["extendedcrafting:enhanced_redstone_ingot", "extendedcrafting:enhanced_redstone_nugget"],
        ["extendedcrafting:ender_ingot", "extendedcrafting:ender_nugget"],
        ["extendedcrafting:enhanced_ender_ingot", "extendedcrafting:enhanced_ender_nugget"],
        ["extendedcrafting:crystaltine_ingot", "extendedcrafting:crystaltine_nugget"],
        ["extendedcrafting:the_ultimate_ingot", "extendedcrafting:the_ultimate_nugget"],
    ].forEach((removedOutputInfo) => {
        const [addedIngot, addedNugget] = removedOutputInfo;
        const unpackingDie = "thermal:press_unpacking_die";
        const packingDie = "thermal:press_packing_3x3_die";
        event.recipes.thermal.press([Item.of(addedNugget, 9)], [Item.of(addedIngot, 1), unpackingDie]);
        event.recipes.thermal.press([Item.of(addedIngot, 1)], [Item.of(addedNugget, 9), packingDie]);
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