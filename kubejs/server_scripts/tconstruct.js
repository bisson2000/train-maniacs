// priority: 0

ServerEvents.recipes(event => {

    

    // molten_enderium
    [
        "tconstruct:melting",
        "tconstruct:entity_melting",
        "tconstruct:material_melting",
    ].forEach(recipeType => {
        event.forEachRecipe({mod: "tconstruct", type: recipeType}, recipe => {
            if (recipe.json
                && recipe.json.getAsJsonObject("result")
                && recipe.json.getAsJsonObject("result").get("tag")
                && recipe.json.getAsJsonObject("result").get("tag").asString === "forge:ender"
            ) {
                recipe.json.getAsJsonObject("result").remove("tag");
                recipe.json.getAsJsonObject("result").addProperty("fluid", "thermal:ender");
                recipe.save();
            }
            
            if (
                recipe.json
                && recipe.json.getAsJsonArray("byproducts")
            ) {
                recipe.json.getAsJsonArray("byproducts").forEach(bp => {
                    if (bp.get("tag") && bp.get("tag").asString === "forge:ender") {
                        bp.remove("tag");
                        bp.addProperty("fluid", "thermal:ender");
                        recipe.save();
                    }
                });
            }
        });
    })

    // molten ender
    //event.forEachRecipe({mod: "tconstruct"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //});
    

    //event.replaceOutput({mod: "tconstruct", output: "forge:molten"})
});