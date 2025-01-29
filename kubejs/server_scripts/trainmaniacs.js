// priority: 1

ServerEvents.recipes(event => {
    
    // TODO:
    // capacitors
    event.shaped(
        Item.of('kubejs:grainy_capacitor', 1), // arg 1: output
        [
          ' G ',
          ' R ', // arg 2: the shape (array of strings)
          ' R '
        ],
        {
          G: 'enderio:grains_of_infinity',
          R: 'kubejs:flux_induced_iron',  //arg 3: the mapping object
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

    // Thermal
    // recipes.replaceAllOccurences(<ore:dustRedstone>, <ore:ingotRedAlloy>, <thermalfoundation:material:513>);
    event.replaceInput({mod:"thermal", input: "minecraft:redstone"}, "minecraft:redstone", "kubejs:flux_induced_iron");
    event.remove({mod: "thermal", id: "thermal:machine_frame"}); // frame
    event.shaped(
      Item.of('thermal:machine_frame', 1), // arg 1: output
      [
        'IGI',
        'GHG', // arg 2: the shape (array of strings)
        'IGI'
      ],
      {
        G: 'tconstruct:clear_glass',
        H: 'immersiveengineering:heavy_engineering',
        I: 'minecraft:iron_ingot',  //arg 3: the mapping object
      }
  );

    // Enderio
    event.replaceInput({mod:"enderio", input:"enderio:grains_of_infinity"}, "enderio:grains_of_infinity", "kubejs:grainy_capacitor");
    event.replaceInput({mod:"enderio", id: "enderio:alloy_smelter"}, "minecraft:furnace", "enderio:primitive_alloy_smelter");

    // Immersive Engineering
    event.replaceInput({mod: "immersiveengineering", id: "immersiveengineering:crafting/heavy_engineering"}, "#forge:ingots/electrum", "immersiveengineering:light_engineering");
    event.replaceInput({mod: "immersiveengineering", id: "immersiveengineering:crafting/light_engineering"}, "#forge:ingots/copper", "enderio:basic_capacitor");


});