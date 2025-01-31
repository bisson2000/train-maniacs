// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {

    // input fluids
    [
        ["nuclearcraft:iron", "tconstruct:molten_iron"],
        ["nuclearcraft:copper", "tconstruct:molten_copper"],
        ["nuclearcraft:gold", "tconstruct:molten_gold"],
        ["nuclearcraft:tin", "tconstruct:molten_tin"],
        ["nuclearcraft:lead", "tconstruct:molten_lead"],
        ["nuclearcraft:zinc", "tconstruct:molten_zinc"],
        ["nuclearcraft:aluminum", "tconstruct:molten_aluminum"],
        ["nuclearcraft:silver", "tconstruct:molten_silver"],
        ["nuclearcraft:uranium", "tconstruct:molten_uranium"],
        ["nuclearcraft:cobalt", "tconstruct:molten_cobalt"],
        ["nuclearcraft:platinum", "tconstruct:molten_platinum"],
        ["nuclearcraft:bronze", "tconstruct:molten_bronze"],
        ["nuclearcraft:steel", "tconstruct:molten_steel"],
        ["nuclearcraft:electrum", "tconstruct:molten_electrum"],
        ["nuclearcraft:enderium", "tconstruct:molten_enderium"],
        ["nuclearcraft:redstone", "thermal:redstone"],
        ["nuclearcraft:lithium", "mekanism:lithium"],
        ["nuclearcraft:sodium", "mekanism:sodium"],
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "nuclearcraft"}, recipe => {
            let changedFlag = false;

            // Input
            if (recipe.json && recipe.json.get("inputFluids") != undefined) {
                recipe.json.getAsJsonArray("inputFluids").forEach(inputFluid => {
                    //console.info(`looping: ${inputFluid}` );
                    if (inputFluid.get("fluid") && inputFluid.get("fluid").asString === fluid) {
                        //console.info(`Recipe matched: ${replacement}` );
                        inputFluid.addProperty("fluid", replacement); // will overwrite
                        changedFlag = true;
                    }
                });
            }

            if (changedFlag) {
                recipe.save();
            }
        });
    });

    // output fluids
    [
        ["forge:iron", "tconstruct:molten_iron"],
        ["forge:copper", "tconstruct:molten_copper"],
        ["forge:gold", "tconstruct:molten_gold"],
        ["forge:tin", "tconstruct:molten_tin"],
        ["forge:lead", "tconstruct:molten_lead"],
        ["forge:zinc", "tconstruct:molten_zinc"],
        ["forge:aluminum", "tconstruct:molten_aluminum"],
        ["forge:silver", "tconstruct:molten_silver"],
        ["forge:uranium", "tconstruct:molten_uranium"],
        ["forge:cobalt", "tconstruct:molten_cobalt"],
        ["forge:platinum", "tconstruct:molten_platinum"],
        ["forge:bronze", "tconstruct:molten_bronze"],
        ["forge:steel", "tconstruct:molten_steel"],
        ["forge:electrum", "tconstruct:molten_electrum"],
        ["forge:enderium", "tconstruct:molten_enderium"],
        ["forge:redstone", "thermal:redstone"],
        ["forge:lithium", "mekanism:lithium"],
        ["forge:sodium", "mekanism:sodium"],
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "nuclearcraft"}, recipe => {
            let changedFlag = false;

            // output
            if (recipe.json && recipe.json.get("outputFluids") != undefined) {
                recipe.json.getAsJsonArray("outputFluids").forEach(outputFluid => {
                    //console.info(`looping output: ${outputFluid}` );
                    if (outputFluid.get("tag") && outputFluid.get("tag").asString === fluid) {
                        //console.info(`Recipe matched: ${replacement}` );
                        outputFluid.remove("tag");
                        outputFluid.addProperty("fluid", replacement); // will overwrite
                        changedFlag = true;
                    }
                });
            }

            if (changedFlag) {
                recipe.save();
            }
        });
    });

    // glowstone
    event.remove({mod: "nuclearcraft", id: "nuclearcraft:irradiator/sand"});
});