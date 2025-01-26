ServerEvents.recipes(event => {

    [
        ["minecraft:iron_ore"],
        ["minecraft:deepslate_iron_ore"],
        ["minecraft:gold_ore"],
        ["minecraft:deepslate_gold_ore"],
        ["minecraft:copper_ore"],
        ["minecraft:deepslate_copper_ore"],
        ["minecraft:redstone_ore"],
        ["minecraft:deepslate_redstone_ore"],
        ["minecraft:coal_ore"],
        ["minecraft:deepslate_coal_ore"],
        ["minecraft:diamond_ore"],
        ["minecraft:deepslate_diamond_ore"],
        ["minecraft:emerald_ore"],
        ["minecraft:deepslate_emerald_ore"],
        ["minecraft:lapis_ore"],
        ["minecraft:deepslate_lapis_ore"],
        ["minecraft:nether_gold_ore"],
        ["minecraft:nether_quartz_ore"],
        ["minecraft:ancient_debris"],

        ["mekanism:lead_ore"],
        ["mekanism:deepslate_lead_ore"],
        ["mekanism:tin_ore"],
        ["mekanism:deepslate_tin_ore"],
        ["mekanism:uranium_ore"],
        ["mekanism:deepslate_uranium_ore"],
        ["mekanism:fluorite_ore"],
        ["mekanism:deepslate_fluorite_ore"],
        ["mekanism:osmium_ore"],
        ["mekanism:deepslate_osmium_ore"],
    ].forEach((removedOutputInfo) => {
        const [removedOutput] = removedOutputInfo;
        event.forEachRecipe({mod: "mekanism"}, recipe => {
            console.info(`recipe: ${recipe.json}`);
            console.info(`recipe: ${recipe.getId()}`);
        });
        event.remove({type:"mekanism:combining", output: removedOutput})
        //event.remove({mod: "create", id: recipeID});
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

});