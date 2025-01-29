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
        R: "#forge:dusts/redstone",
        I: "minecraft:iron_ingot"
      }
    );

    // flux_induced_iron
    event.smelting('1x kubejs:flux_induced_iron', 'kubejs:raw_flux_induced_iron', 0.25, 200); // 0.25xp and 10s (200 ticks)
    event.blasting('1x kubejs:flux_induced_iron', 'kubejs:raw_flux_induced_iron', 0.25, 100);

    // Thermal
    // recipes.replaceAllOccurences(<ore:dustRedstone>, <ore:ingotRedAlloy>, <thermalfoundation:material:513>);
    event.replaceInput({mod:"thermal", input: "#forge:dusts/redstone"}, "#forge:dusts/redstone", "kubejs:flux_induced_iron");
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
    event.replaceInput({mod:"enderio", id: "enderio:alloy_smelting/redstone_alloy_ingot"}, "minecraft:furnace", "enderio:primitive_alloy_smelter");
    
    event.remove({mod: "enderio", id: "enderio:alloy_smelting/redstone_alloy_ingot"});
    event.recipes.enderio.alloy_smelting(Item.of("enderio:redstone_alloy_ingot"), 
      ["kubejs:flux_induced_iron", "#forge:silicon", "#forge:ingots/graphite"],
      3200,
      1.0
    );

    // Immersive Engineering
    event.replaceInput({mod: "immersiveengineering", id: "immersiveengineering:crafting/heavy_engineering"}, "#forge:ingots/electrum", "immersiveengineering:light_engineering");
    event.replaceInput({mod: "immersiveengineering", id: "immersiveengineering:crafting/light_engineering"}, "#forge:ingots/copper", "enderio:basic_capacitor");

    // pneumaticcraft
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/capacitor"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 2, tag:"pneumaticcraft:wiring"},{tag:"forge:slimeballs"},{item:"pneumaticcraft:plastic"},{item:"kubejs:octodecuplic_capacitor"}, {tag:"forge:ingots/compressed_iron"}],
      pressure: 1.0,
      results:[{item:"pneumaticcraft:capacitor"}]
    });
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/transistor"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 3, tag:"pneumaticcraft:wiring"},{item:"kubejs:flux_induced_iron"},{item:"pneumaticcraft:plastic"},{item:"kubejs:octodecuplic_capacitor"}, {tag:"forge:ingots/compressed_iron"}],
      pressure: 1.0,
      results:[{item:"pneumaticcraft:transistor"}]
    });

    // mekanism
    event.forEachRecipe({mod: "mekanism", id:"mekanism:metallurgic_infusing/alloy/infused"}, recipe => {
      if (recipe.json && recipe.json.get("itemInput") && recipe.json.getAsJsonObject("itemInput").getAsJsonObject("ingredient")) {
        recipe.json.getAsJsonObject("itemInput").getAsJsonObject("ingredient").remove("tag");
        recipe.json.getAsJsonObject("itemInput").getAsJsonObject("ingredient").addProperty("item", "pneumaticcraft:capacitor");
        recipe.save();
      }
    });
    event.forEachRecipe({mod: "mekanism", id:"mekanism:control_circuit/basic"}, recipe => {
      if (recipe.json && recipe.json.get("itemInput") && recipe.json.getAsJsonObject("itemInput").getAsJsonObject("ingredient")) {
        recipe.json.getAsJsonObject("itemInput").getAsJsonObject("ingredient").remove("tag");
        recipe.json.getAsJsonObject("itemInput").getAsJsonObject("ingredient").addProperty("item", "pneumaticcraft:transistor");
        recipe.save();
      }
    });
    event.replaceInput({mod: "mekanism", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");
    event.replaceInput({mod: "mekanism", input: "minecraft:furnace"}, "minecraft:furnace", "ironfurnaces:obsidian_furnace");
    event.replaceInput({mod: "mekanism", id: "mekanism:metallurgic_infuser"}, "#forge:ingots/osmium", "mekanism:steel_casing") ;
    // mekanism casing
    event.remove({mod: "mekanism", id: "mekanism:steel_casing"});
    event.shaped(Item.of("mekanism:steel_casing", 1), [
      "DGO",
      "GFG",
      "OGD"
    ], {
      D: "#forge:ingots/dark_steel",
      G: "pneumaticcraft:transistor",
      O: "#forge:ingots/osmium",
      F: "thermal:machine_frame"
    });

    // minecraft
    event.replaceInput({mod: "minecraft", id: "minecraft:piston"}, "#forge:ingots/iron", "kubejs:flux_induced_iron");
});