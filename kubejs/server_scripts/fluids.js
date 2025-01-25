// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

ServerEvents.recipes(event => {

    [
        ['nuclearcraft:bronze', 'tconstruct:molten_bronze']
    ].forEach((replacementInfo) => {
        const [fluid, replacement] = replacementInfo;
        event.forEachRecipe({mod: "nuclearcraft"}, recipe => {
            //console.info(`Recipe matched: ${recipe.json}` );
            if (recipe.json && recipe.json.get("inputFluids") != undefined) {
                let changedFlag = false;
                recipe.json.getAsJsonArray("inputFluids").forEach(inputFluid => {
                    //console.info(`looping: ${inputFluid}` );
                    if (inputFluid.get('fluid') && inputFluid.get('fluid').asString === fluid) {
                        //console.info(`Recipe matched: ${replacement}` );
                        inputFluid.addProperty("fluid", replacement) // will overwrite
                        changedFlag = true;
                    }
                });
                if (changedFlag) {
                    recipe.save();
                }
            }
        });
    });
    
    //event.replaceInput({ type: 'fluid', ingredient: { fluid: oldFluid } }, { fluid: oldFluid }, { fluid: newFluid });
    event.replaceInput(
        { input: 'minecraft:stick' }, // Arg 1: the filter
        'minecraft:stick',            // Arg 2: the item to replace
        '#minecraft:saplings'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );
});