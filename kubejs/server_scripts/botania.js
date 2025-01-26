ServerEvents.recipes(event => {

    //event.forEachRecipe({mod: "botania"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //    console.info(`recipe: ${recipe.getId()}`);
    //});
    event.remove({mod: "botania", id:"botania:petal_apothecary/orechid"});
    event.remove({mod: "botania", id:"botania:petal_apothecary/orechid_ignem"});
    event.remove({mod: "botania", id:"botania:floating_orechid"});
    event.remove({mod: "botania", id:"botania:floating_orechid_ignem"});
    event.remove({mod: "botania", type:"botania:orechid"});
    event.remove({mod: "botania", type:"botania:orechid_ignem"});
});