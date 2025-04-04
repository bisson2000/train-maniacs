// priority: 0

ServerEvents.recipes(event => {

    // for clay
    event.shaped(Item.of("minecraft:pointed_dripstone", 1), [
        "CCC",
        "G G",
        " S "
      ], {
        C: "#forge:cobblestone/normal",
        G: "#forge:gravel",
        S: "#forge:sand",
    });

    // remove all instances of nuggets
    event.remove({type: "minecraft:crafting_shapeless", output: "#forge:nuggets"});
    event.remove({type: "minecraft:crafting_shaped", output: "#forge:nuggets"});
    event.remove({type: "minecraft:crafting_shapeless", input: "#forge:nuggets", output: "#forge:ingots"});
    event.remove({type: "minecraft:crafting_shaped", input: "#forge:nuggets", output: "#forge:ingots"});

    // Nerf wood
    event.forEachRecipe({output: "#minecraft:planks", type: "minecraft:crafting_shapeless"}, recipe => {
      if (recipe.json && recipe.json.getAsJsonObject("result") && recipe.json.getAsJsonObject("result").get("count")) {
        //console.info(`recipe: ${recipe.json}`);
        recipe.json.getAsJsonObject("result").remove("count");
        recipe.json.getAsJsonObject("result").add("count", 1);
        recipe.save();
      }
    });
});