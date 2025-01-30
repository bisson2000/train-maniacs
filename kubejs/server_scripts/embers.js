// priority: 0

ServerEvents.recipes(event => {
    
    // fluids
    [
        ["embers:molten_iron", "tconstruct:molten_iron"],
        ["embers:molten_gold", "tconstruct:molten_gold"],
        ["embers:molten_copper", "tconstruct:molten_copper"],
        ["embers:molten_lead", "tconstruct:molten_lead"],
        ["embers:molten_silver", "tconstruct:molten_silver"],
        ["embers:molten_nickel", "tconstruct:molten_nickel"],
        ["embers:molten_tin", "tconstruct:molten_tin"],
        ["embers:molten_aluminum", "tconstruct:molten_aluminum"],
        ["embers:molten_zinc", "tconstruct:molten_zinc"],
        ["embers:molten_platinum", "tconstruct:molten_platinum"],
        ["embers:molten_uranium", "tconstruct:molten_uranium"],
        ["embers:molten_bronze", "tconstruct:molten_bronze"],
        ["embers:molten_electrum", "tconstruct:molten_electrum"],
        ["embers:molten_brass", "tconstruct:molten_brass"],
        ["embers:molten_constantan", "tconstruct:molten_constantan"],
        ["embers:molten_invar", "tconstruct:molten_invar"]
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "embers"}, recipe => {
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
        });
    });

    // bore
    event.replaceInput({mod: "embers", id: "embers:ember_bore"}, "minecraft:iron_ingot", "#forge:plates/iron");
    event.replaceInput({mod: "embers", id: "embers:ember_bore"}, "minecraft:copper_ingot", "#forge:plates/copper");

});