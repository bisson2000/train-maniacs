// priority: 0

ServerEvents.recipes(event => {

    // gear
    event.remove({mod:"enderio", id:"enderio:iron_gear"});

    event.forEachRecipe({mod: "enderio"}, recipe => {
        console.info(`recipe: ${recipe.json}`);
    })

});