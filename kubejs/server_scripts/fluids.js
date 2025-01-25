// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

ServerEvents.recipes(event => {

    [
        'nuclearcraft:bronze'
    ].forEach((fluid) => {
        event.forEachRecipe({mod: "nuclearcraft"}, recipe => {
            //console.info(`Recipe matched: ${recipe.json}` );
            if (recipe.json && recipe.json.get("inputFluids") != undefined) {
                let changedFlag = false;
                recipe.json.getAsJsonArray("inputFluids").forEach(inputFluid => {
                    console.info(`looping: ${inputFluid}` );
                    //console.info(`looping: ${inputFluid.getAsJsonObject("fluid")}` );
                    if (inputFluid.get('fluid') && inputFluid.get('fluid').asString === fluid) {
                        inputFluid.addProperty("fluid", 'tconstruct:molten_bronze') // will overwrite
                        changedFlag = true;
                        //inputFluid['fluid'] = 'tconstruct:molten_bronze';
                    }
                });
                if (changedFlag) {
                    recipe.save();
                }
            }
        });
    });
    const oldFluid = 'minecraft:water'; // Fluid to replace
    const newFluid = 'minecraft:lava'; // Fluid to use instead
    
    //event.replaceInput({ type: 'fluid', ingredient: { fluid: oldFluid } }, { fluid: oldFluid }, { fluid: newFluid });
    event.replaceInput(
        { input: 'minecraft:stick' }, // Arg 1: the filter
        'minecraft:stick',            // Arg 2: the item to replace
        '#minecraft:saplings'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    );

    //event.forEachRecipe("*", recipe => {
    //    console.info(`Recipe matched: ${recipe.json}`);
    //    if (recipe.json && recipe.json.input?.fluid === 'nuclearcraft:bronze') {
    //        //console.info(`Recipe matched: ${recipe.id}`);
    //    }
    //});

    //event.replaceInput(
    //    "*", // Arg 1: the filter
    //    Fluid.of('nuclearcraft:bronze', 144),            // Arg 2: the item to replace
    //    Fluid.of('tconstruct:molten_bronze', 144)        // Arg 3: the item to replace it with
    //    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    //);
    //event.replaceOutput(
    //    "*", // Arg 1: the filter
    //    Fluid.LAVA_ID,            // Arg 2: the item to replace
    //    '#minecraft:saplings'         // Arg 3: the item to replace it with
    //    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    //);
});