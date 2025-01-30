// priority: 0

ServerEvents.recipes(event => {

    [
        ["createaddition:gold_wire"],
        ["createaddition:iron_wire"],
        ["immersiveengineering:wire_copper"],
        ["immersiveengineering:wire_electrum"],
        ["immersiveengineering:wire_steel"],
        ["immersiveengineering:wire_lead"],
    ].forEach((replacementInfo) => {
        const [outputItem] = replacementInfo;
        event.remove({mod: "createaddition", type:"createaddition:rolling", output: outputItem});
    });

    // Creosote
    event.forEachRecipe({mod: "createaddition", id: "createaddition:filling/treated_wood_planks"}, recipe => {
        if (recipe.json && recipe.json.getAsJsonArray("ingredients")) {
            recipe.json.getAsJsonArray("ingredients").forEach(element => {
                if(element.asJsonObject.get("fluid") && element.asJsonObject.get("fluid").asString === "immersiveengineering:creosote") {
                    element.asJsonObject.remove("fluid");
                    element.asJsonObject.addProperty("fluidTag", "forge:creosote");
                    recipe.save();
                }
            });
        }
    });

});