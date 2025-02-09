// priority: 0

ServerEvents.recipes(event => {

    // for clay
    event.shaped(Item.of('minecraft:pointed_dripstone', 1), [
        'CCC',
        'G G',
        ' S '
      ], {
        C: "minecraft:cobblestone",
        G: 'minecraft:gravel',
        S: 'minecraft:sand',
    });

    // remove all instances of nuggets
    event.remove({type: "minecraft:crafting_shapeless", output: "#forge:nuggets"});
    event.remove({type: "minecraft:crafting_shaped", output: "#forge:nuggets"});
    event.remove({type: "minecraft:crafting_shaped", input: "#forge:nuggets"});
    event.remove({type: "minecraft:crafting_shaped", input: "#forge:nuggets"});
});