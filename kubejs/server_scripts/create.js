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
        //event.forEachRecipe({mod: "create"}, recipe => {
        //    console.info(`recipe: ${recipe.json}`);
        //    console.info(`recipe: ${recipe.getId()}`);
        //});
        event.remove({mod: "create", id: recipeID});
        /*event.forEachRecipe({mod: "create"}, recipe => {
            let changedFlag = false;

            // Input
            //console.info(`recipe: ${recipe.json}`);
            //if (recipe.json?.get("input")?.getAsJsonObject().get("fluid")?.asString === fluid) {
            //    recipe.json.get("input").addProperty("fluid", replacement);
            //    console.info(`match: ${replacement}`);
            //    changedFlag = true;
            //}

            // output
            if (recipe.json 
                && recipe.json.get("output")
                && recipe.json.get("output").get("fluid")
                && recipe.json.get("output").get("fluid").asString === fluid) {
                recipe.json.get("output").addProperty("fluid", replacement);
                //console.info(`match o: ${replacement}`);
                changedFlag = true;
            }

            // bonus
            if (recipe.json 
                && recipe.json.get("bonus")
                && recipe.json.get("bonus").get("fluid")
                && recipe.json.get("bonus").get("fluid").asString === fluid) {
                recipe.json.get("bonus").addProperty("fluid", replacement);
                //console.info(`match b: ${replacement}`);
                changedFlag = true;
            }

            if (changedFlag) {
                recipe.save();
            }
        });*/
    });

    // ender dust:
    event.remove({mod: "create", id: "create:milling/compat/ae2/ender_pearl"});
    event.recipes.create.milling(["2x ae2:ender_dust"], ["minecraft:ender_pearl"]);
    //event.replaceOutput({mod: "create", id: "create:milling/compat/ae2/ender_pearl"}, "ae2:ender_dust", "2x ae2:ender_dust");

    // nugget of experience
    event.recipes.thermal.crystallizer([Item.of("create_sa:heap_of_experience", 10)], [Fluid.of("mob_grinding_utils:fluid_xp", 120), Item.of("minecraft:gravel", 1)], 0, 400);
    event.recipes.thermal.crystallizer([Item.of("create_sa:heap_of_experience", 10)], [Fluid.of("enderio:xp_juice", 120), Item.of("minecraft:gravel", 1)], 0, 400);

    // andesite alloy limitation. Remove iron
    event.remove({id: "tconstruct:compat/create/andesite_alloy_iron"});
    event.remove({id: "create:mixing/andesite_alloy"});
    event.remove({id: "thermal:compat/create/smelter_create_alloy_andesite_alloy"});
    event.recipes.thermal.smelter([Item.of("create:andesite_alloy")], ["#forge:andesite", "#forge:nuggets/zinc"], 0, 3200);

});