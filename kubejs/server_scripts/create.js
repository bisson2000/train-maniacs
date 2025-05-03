// priority: 0

ServerEvents.recipes(event => {

    // Ore gen recipes
    [
        ["create:splashing/gravel"],
        ["create:splashing/soul_sand"],
        ["create:splashing/sand"],
        ["create:splashing/red_sand"],
        ["create:splashing/gravel"],
        ["create:filling/redstone"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "create", id: recipeID});
    });

    // ender dust:
    event.remove({mod: "create", id: "create:milling/compat/ae2/ender_pearl"});
    event.recipes.create.milling(["2x ae2:ender_dust"], ["minecraft:ender_pearl"]);

    // nugget of experience
    event.recipes.thermal.crystallizer([Item.of("create_sa:heap_of_experience", 10)], [Fluid.of("mob_grinding_utils:fluid_xp", 120), Item.of("minecraft:gravel", 1)], 0, 400);
    event.recipes.thermal.crystallizer([Item.of("create_sa:heap_of_experience", 10)], [Fluid.of("enderio:xp_juice", 120), Item.of("minecraft:gravel", 1)], 0, 400);

    // andesite alloy limitation. Remove iron
    event.remove({id: "tconstruct:compat/create/andesite_alloy_iron"});
    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "thermal:compat/create/smelter_create_alloy_andesite_alloy"});
    event.recipes.thermal.smelter([Item.of("create:andesite_alloy")], ["#forge:andesite", "#forge:nuggets/zinc"], 0, 3200);

    // compat
    event.recipes.create.pressing([Item.of("thermal:invar_plate")], [Item.of("thermal:invar_ingot")]);
    event.recipes.create.pressing([Item.of("thermal:bronze_plate")], [Item.of("mekanism:ingot_bronze")]);

});