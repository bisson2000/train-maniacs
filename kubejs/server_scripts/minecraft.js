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

});