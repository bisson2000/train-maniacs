// priority: 1

ServerEvents.recipes(event => {
    
    // capacitors
    event.shaped(
        Item.of('kubejs:decuplic_capacitor', 3), // arg 1: output
        [
          'A B',
          ' C ', // arg 2: the shape (array of strings)
          'B A'
        ],
        {
          A: 'minecraft:andesite',
          B: 'minecraft:diorite',  //arg 3: the mapping object
          C: 'minecraft:granite'
        }
    );
    // raw_flux_induced_iron
    event.shaped(
      Item.of("kubejs:raw_flux_induced_iron", 1),
      [
        "RRR",
        "RIR",
        "RRR"
      ],
      {
        R: "minecraft:redstone",
        I: "minecraft:iron_ingot"
      }
    );

    // flux_induced_iron
    event.smelting('1x kubejs:flux_induced_iron', 'kubejs:raw_flux_induced_iron', 0.25, 200); // 0.25xp and 10s (200 ticks)
    event.blasting('1x kubejs:flux_induced_iron', 'kubejs:raw_flux_induced_iron', 0.25, 100);

    // recipes.replaceAllOccurences(<ore:dustRedstone>, <ore:ingotRedAlloy>, <thermalfoundation:material:513>);
    event.replaceInput({mod:"thermal", input: "minecraft:redstone"}, "minecraft:redstone", "kubejs:flux_induced_iron");

});