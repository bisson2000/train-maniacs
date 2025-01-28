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

});