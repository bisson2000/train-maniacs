// priority: 1

ServerEvents.recipes(event => {

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
    event.remove({mod: "enderio", id: "enderio:double_layer_capacitor"});
    event.shaped(
      Item.of('enderio:double_layer_capacitor', 1), // arg 1: output
      [
        'BQE',
        'CDC', // arg 2: the shape (array of strings)
        'EQB'
      ],
      {
        E: "#forge:ingots/energetic_alloy",
        Q: "#forge:gems/quartz",
        C: "enderio:basic_capacitor",
        D: "#forge:dusts/coal",
        B: "#forge:ingots/bronze"
      }
    );
    event.remove({mod: "enderio", id: "enderio:octadic_capacitor"});
    event.shaped(
      Item.of('enderio:octadic_capacitor', 1),
      [
        ' VZ',
        'CDC',
        'ZV '
      ],
      {
        V: "#forge:ingots/vibrant_alloy",
        Z: "aether:zanite_gemstone",
        C: "enderio:double_layer_capacitor",
        D: "minecraft:glowstone",
      }
    );

    // fork here. Start creating chips. Keep octodecuplic_capacitor for advanced tiers of mekanism, with more advanced chips
    event.recipes.enderio.slicing(Item.of("kubejs:decuplic_capacitor", 1), ["enderio:octadic_capacitor", "#forge:ingots/end_steel", "enderio:octadic_capacitor", "createdeco:industrial_iron_ingot", "ae2:fluix_dust", "createdeco:industrial_iron_ingot"]);
    event.shaped(Item.of("kubejs:microchip_tier_1", 1), [
      "LLL",
      "ROR",
      "LLL"
    ], {
      L: "#forge:plates/lead",
      R: "#forge:dusts/redstone",
      O: "enderio:octadic_capacitor",
    });

    // ********************END OF CUSTOM CAPACITORS **********************//

    // embers
    // Mechanical Core
    event.remove({mod: "embers", id: "embers:mechanical_core"});
    event.shaped(
        Item.of('embers:mechanical_core', 1),
        [
          'ICI',
          'SPS',
          'ISI'
        ],
        {
          C: "embers:caminite_bricks",
          P: '#forge:plates/lead',
          S: 'tconstruct:seared_brick',
          I: "#forge:ingots/iron",
        }
    );

    // create
    event.remove({mod: "create", id: "create:milling/compat/ae2/sky_stone_block"}); // for infinite sky stone
    event.recipes.create.crushing([Item.of("ae2:sky_dust", 2)], [Item.of("ae2:sky_stone_block")]);

    // ae2
    event.replaceInput({mod: "ae2", id: "ae2:network/cells/item_storage_components_cell_4k_part"}, "minecraft:redstone", "kubejs:flux_induced_iron");
    event.replaceInput({mod: "ae2", id: "ae2:network/cells/item_storage_components_cell_16k_part"}, "minecraft:glowstone_dust", "#forge:ingots/manyullyn");
    event.replaceInput({mod: "ae2", id: "ae2:network/cells/item_storage_components_cell_64k_part"}, "minecraft:glowstone_dust", "#forge:ingots/refined_glowstone");
    event.replaceInput({mod: "ae2", id: "ae2:network/cells/item_storage_components_cell_256k_part"}, "ae2:sky_dust", "ae2:sky_stone_block");
    event.replaceInput({mod: "megacells", id: "megacells:cells/cell_component_1m"}, "ae2:sky_dust", "ae2:sky_stone_brick");
    event.replaceInput({mod: "megacells", id: "megacells:cells/cell_component_16m"}, "#forge:dusts/ender_pearl", "#forge:ingots/enderium");
    event.replaceInput({mod: "megacells", id: "megacells:cells/cell_component_16m"}, "#forge:dusts/ender_pearl", "#forge:ingots/enderium");

    

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
    // Thermal dynamos
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_stirling"}, "#forge:stone", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_stirling"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_compression"}, "#forge:ingots/bronze", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_compression"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_magmatic"}, "#forge:ingots/invar", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_magmatic"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_numismatic"}, "#forge:ingots/constantan", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_numismatic"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_lapidary"}, "minecraft:lapis_lazuli", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_lapidary"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_disenchantment"}, "minecraft:experience_bottle", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_disenchantment"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_gourmand"}, "#forge:ingots/tin", "immersiveengineering:capacitor_mv");
    event.replaceInput({mod: "thermal", id: "thermal:dynamo_gourmand"}, "minecraft:iron_ingot", "immersiveengineering:component_steel");

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

    // ad_astra
    event.remove({mod: "ad_astra", id: "ad_astra:nasa_workbench"});
    event.shaped(
      Item.of('ad_astra:nasa_workbench', 1),
      [
        'RKR',
        'AWA',
        'PSP'
      ],
      {
        K: "aether:silver_dungeon_key",
        R: '#forge:rods/electrum',
        W: "thermal:machine_frame",
        S: '#forge:storage_blocks/steel',
        P: "#forge:plates/steel",
        A: "enderio:redstone_alloy_ingot"
      }
    );

    // pneumaticcraft
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/capacitor"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 2, tag:"pneumaticcraft:wiring"},{tag:"forge:slimeballs"},{item:"pneumaticcraft:plastic"},{item:"kubejs:decuplic_capacitor"}, {tag:"forge:ingots/compressed_iron"}],
      pressure: 1.0,
      results:[{item:"pneumaticcraft:capacitor"}]
    });
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/transistor"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 3, tag:"pneumaticcraft:wiring"},{item:"kubejs:flux_induced_iron"},{item:"pneumaticcraft:plastic"},{item:"kubejs:microchip_tier_1"}, {tag:"forge:ingots/compressed_iron"}],
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