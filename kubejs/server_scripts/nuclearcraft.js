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

    // leacher
    event.remove({mod: "nuclearcraft", id: "nuclearcraft:leacher"});
    event.remove({mod: "nuclearcraft", type: "nuclearcraft:leacher"});

    // all require a chassis
    event.replaceInput({mod: "nuclearcraft", id: "nuclearcraft:manufactory"}, "minecraft:piston", "nuclearcraft:chassis");
    event.replaceInput({mod: "nuclearcraft", id: "nuclearcraft:alloy_smelter"}, "minecraft:blast_furnace", "nuclearcraft:chassis");

    // chassis require uranium. Actually modified later
    //event.replaceInput({mod: "nuclearcraft", id: "nuclearcraft:chassis"}, "nuclearcraft:tough_alloy_ingot", "#forge:ingots/uranium");

    // enderium
    event.remove({mod: "nuclearcraft", id: "nuclearcraft:manufactory/ender_pearl"});

    // fluorite
    event.replaceOutput({mod: "nuclearcraft", id: "nuclearcraft:rock_crusher/diorite"}, "mekanism:dust_fluorite", "");

    // Fuel reprocessor. Allow basic fuels to be reprocessed
    event.forEachRecipe({mod: "nuclearcraft", type: "nuclearcraft:fuel_reprocessor"}, recipe => {
        const targetName = "nuclearcraft:depleted_"
        const newTarget = "nuclearcraft:"
        if (recipe.json
            && recipe.json.getAsJsonArray("input")
            && recipe.json.getAsJsonArray("input").get(0)
            && recipe.json.getAsJsonArray("input").get(0).asJsonObject
            && recipe.json.getAsJsonArray("input").get(0).asJsonObject.get("item")
            && recipe.json.getAsJsonArray("input").get(0).asJsonObject.get("item").asString
            && recipe.json.getAsJsonArray("input").get(0).asJsonObject.get("item").asString.startsWith(targetName)
            //&& String.prototype.startsWith(recipe.json.getAsJsonArray("input").get(0).asJsonObject.get("item").asString, "depleted_")
        ) {
            let copy = recipe.json.deepCopy().asJsonObject;
            const replacedItem = copy.getAsJsonArray("input").get(0).asJsonObject.get("item").asString.replace(targetName, newTarget);
            copy.getAsJsonArray("input").get(0).asJsonObject.remove("item");
            copy.getAsJsonArray("input").get(0).asJsonObject.addProperty("item", replacedItem);
            event.custom(copy);
        }
    });

    //event.replaceOutput({mod: "nuclearcraft", id: "nuclearcraft:manufactory/ender_pearl"}, "thermal:enderium_dust", "#forge:dusts/ender_pearl");
});