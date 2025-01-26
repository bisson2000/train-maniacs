ServerEvents.recipes(event => {
    
    [
        ["createbigcannons:molten_steel", "tconstruct:molten_steel"],
        ["createbigcannons:molten_bronze", "tconstruct:molten_bronze"]
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "createbigcannons"}, recipe => {
            let changedFlag = false;

            // Input
            if (recipe.json && recipe.json.get("ingredients") != undefined) {
                recipe.json.getAsJsonArray("ingredients").forEach(inputFluid => {
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
        ["createbigcannons:molten_steel", "tconstruct:molten_steel"],
        ["createbigcannons:molten_bronze", "tconstruct:molten_bronze"],
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "createbigcannons"}, recipe => {
            let changedFlag = false;

            // output
            if (recipe.json && recipe.json.get("results") != undefined) {
                recipe.json.getAsJsonArray("results").forEach(outputFluid => {
                    //console.info(`looping output: ${outputFluid}` );
                    if (outputFluid.get("fluid") && outputFluid.get("fluid").asString === fluid) {
                        //console.info(`Recipe matched: ${replacement}` );
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

});