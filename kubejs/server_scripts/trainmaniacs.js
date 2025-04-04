// priority: 1

ServerEvents.recipes(event => {

    /**
     * TODOs: 
     * Add descriptions for quests
     * Add Gaia singularity - done
     * Add flux network quests - done
     * Add portal quests - done 
     * Hostile networks: prediction quests make easier. Add villager prediction - done
     * Nerf wood - done
     * Nerf and fix simply jetpacks - done
     * Recipe for rabbit foot - done
     * Recipe for chunk loader - done
     * Nerf pneumaticcraft with osmium or desh - done
     * Make redstone spawn only in the twilightforest - done
     * How to source emeralds? - With mob farm
     * Make drawers upgrades incremental - done
     * Nerf ae2 spacial storage to prevent abuse - no need
     * Disable mekanism miner and immersiveengineering excavator - done. Won't remove mekanism miner
     * Portals to dimensions: planets, twilight forest, end (aether integrated with create already) - done
     * Change ore generation on planets - done
     * Make ores more sparse. Encourage trains - done
     * Compressed ores recipes - done
     * Add armor leveling system (armor plus) - won't do
     * Add chaos fragment duplication in mekanism - done
     * Modify botania - done
     * Remove tconstruct cheese - won't do
     * Remove fluorite rock crusher - done
     * Defeat all bosses in twilightforest to unlock the explorer's compass
     * Add ironwood logic with torchberries - done
     * Add boss requirement for rockets - done
     * Add dawnstone logic. Unclock recipe when first dawnstone is created - done
     * Modify cobblefordays recipes - done
     * Change recipe for scanner - done
     * Change recipes for hostile networks - done
     * Add egg recipe - done
     * Remove chicken chunk load - done
     * Modify nuclearcraft cooling rates and fuels - done
     * Mekanims: nerf  ethylene with configs - done, / 8
     * Mekanims: nerf remove nuclear waste - done
     * Modify mekanism fusion reactor recipe - Not needed. it depends on fluorite
     * Remove waystones for draconic evolution dislocators? - done
     * Remove bigreactors? - done
     * infinite end stone - done
     * infinite grains of infinity - done
     * microchip tier 3 with advanced oil processing - done. With lubricant
     * Disable enderio? no
     * infinite ender pearls - done
     * infinite nether stars: nether spawner + killer - done
     * infinite clay - done dripstone craft
     * blood farm idea: Well of Suffering - done
     * explain infinite glowstone loop. Make cinder flour easier? - done
     * 
     * Lock rocket crafting behind progression
     * Tier 1: Silver key
     * Tier 3: Gold key (Infernal)
     * Tier 2: Bronze key
     * Tier 4: Platinum key
     */

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

    // knowledge
    event.custom({
      "type":"create:deploying",
      "ingredients":[{"item":"minecraft:paper"},{"item":"kubejs:knowledge_of_the_sky"}],
      "keepHeldItem":true,
      "results":[{"item":"kubejs:fragment_of_knowledge_of_the_sky"}]
    });
    event.custom({
      "type":"create:deploying",
      "ingredients":[{"item":"minecraft:paper"},{"item":"kubejs:knowledge_of_hell"}],
      "keepHeldItem":true,
      "results":[{"item":"kubejs:fragment_of_knowledge_of_hell"}]
    });
    event.custom({
      "type":"create:deploying",
      "ingredients":[{"item":"minecraft:paper"},{"item":"kubejs:knowledge_of_the_mines"}],
      "keepHeldItem":true,
      "results":[{"item":"kubejs:fragment_of_knowledge_of_the_mines"}]
    });
    event.custom({
      "type":"create:deploying",
      "ingredients":[{"item":"minecraft:paper"},{"item":"kubejs:knowledge_of_the_galaxies"}],
      "keepHeldItem":true,
      "results":[{"item":"kubejs:fragment_of_knowledge_of_the_galaxies"}]
    });
    
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
        'PVZ',
        'CDC',
        'ZVP'
      ],
      {
        V: "#forge:ingots/vibrant_alloy",
        Z: "aether:zanite_gemstone",
        C: "enderio:double_layer_capacitor",
        D: "minecraft:glowstone",
        P: "minecraft:prismarine_crystals",
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

    event.shaped(Item.of("kubejs:microchip_tier_2", 1), [
      " D ",
      "CPC",
      " D "
    ], {
      C: "kubejs:microchip_tier_1",
      P: "pneumaticcraft:printed_circuit_board",
      D: "#forge:dusts/diamond",
    });

    event.shaped(Item.of("kubejs:unfinished_microchip_tier_3", 1), [
      " D ",
      "CPC",
      " D "
    ], {
      C: "kubejs:microchip_tier_2",
      P: "bloodmagic:demonslate",
      D: "#forge:plates/netherite",
    });
    event.recipes.thermal.bottler(["kubejs:microchip_tier_3"], ["kubejs:unfinished_microchip_tier_3", Fluid.of("pneumaticcraft:lubricant", 250)]);

    // ********************END OF CUSTOM RECIPES **********************//

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
    // dawnstone
    event.recipes.enderio.alloy_smelting("embers:dawnstone_ingot", ["1x #forge:ingots/copper", "1x #forge:ingots/gold"], 1600, 0.5);

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
    event.replaceInput({mod:"thermal", input: "#forge:dusts/redstone"}, "#forge:dusts/redstone", "kubejs:flux_induced_iron");
    event.remove({mod: "thermal", id: "thermal:machine_frame"}); // frame
    event.shaped(
      Item.of('thermal:machine_frame', 1), // arg 1: output
      [
        'ZGD',
        'GHG', // arg 2: the shape (array of strings)
        'DGZ'
      ],
      {
        Z: '#forge:ingots/brass',
        D: 'extendedcrafting:ender_ingot',
        G: 'mob_grinding_utils:tinted_glass',
        H: 'immersiveengineering:heavy_engineering',  //arg 3: the mapping object
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

    event.recipes.thermal.insolator(["2x enderio:grains_of_infinity"], ["enderio:grains_of_infinity"]); // infinite grains of infinity

    // Enderio
    event.replaceInput({mod:"enderio", input:"enderio:grains_of_infinity"}, "enderio:grains_of_infinity", "kubejs:grainy_capacitor");

    event.remove({mod: "enderio", id: "enderio:primitive_alloy_smelter"});
    event.shaped(
      Item.of("enderio:primitive_alloy_smelter", 1),
      [
        'FFF',
        'DGD',
        'CDC'
      ],
      {
        F: 'minecraft:furnace',
        G: 'kubejs:grainy_capacitor',
        C: 'minecraft:deepslate',
        D: 'extendedcrafting:ender_ingot',
      }
    );
    event.replaceInput({mod:"enderio", id: "enderio:alloy_smelter"}, "minecraft:furnace", "enderio:primitive_alloy_smelter");
    
    event.remove({mod: "enderio", id: "enderio:alloy_smelting/redstone_alloy_ingot"});
    event.recipes.enderio.alloy_smelting(Item.of("enderio:redstone_alloy_ingot"), 
      ["kubejs:flux_induced_iron", "#forge:silicon", "#forge:ingots/graphite"],
      3200,
      1.0
    );

    event.recipes.enderio.alloy_smelting(Item.of("minecraft:end_stone", 4), // end stone
      ["#forge:sand", "aether:ambrosium_shard"],
      1600,
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
        K: "aether:zanite_block",
        R: '#forge:rods/electrum',
        W: "thermal:machine_frame",
        S: '#forge:storage_blocks/steel',
        P: "#forge:plates/steel",
        A: "enderio:redstone_alloy_ingot"
      }
    );
    event.replaceInput({mod: "ad_astra", id: "ad_astra:coal_generator"}, "minecraft:furnace", "thermal:machine_frame");
    event.replaceInput({mod: "ad_astra", id: "ad_astra:fuel_refinery"}, "minecraft:furnace", "thermal:machine_frame");
    event.replaceInput({mod: "ad_astra", id: "ad_astra:fuel_refinery"}, "minecraft:bucket", "enderio:octadic_capacitor");

    // ad_astra rockets
    event.remove({id: "ad_astra:steel_engine"});
    const custom_steel_engine = event.shaped(Item.of("ad_astra:steel_engine", 1), [
      "PKP",
      "PEP",
      " F "
    ], {
      K: "kubejs:fragment_of_knowledge_of_the_sky",
      P: "#forge:plates/steel",
      E: "ad_astra:engine_frame",
      F: "ad_astra:fan",
    });

    event.remove({id: "ad_astra:desh_engine"});
    const custom_desh_engine = event.shaped(Item.of("ad_astra:desh_engine", 1), [
      "PKP",
      "PEP",
      "WFW"
    ], {
      K: "kubejs:fragment_of_knowledge_of_hell",
      P: "#forge:plates/desh",
      E: "ad_astra:steel_engine",
      F: "ad_astra:fan",
      W: "#forge:wires/gold",
    });
    event.remove({id: "ad_astra:desh_tank"});
    event.shaped(Item.of("ad_astra:desh_tank", 1), [
      "PPW",
      "PTR",
      "PPW"
    ], {
      P: "#forge:plates/desh",
      T: "ad_astra:steel_tank",
      R: "#forge:rods/steel",
      W: "#forge:wires/gold",
    });

    event.remove({id: "ad_astra:ostrum_engine"});
    const custom_ostrum_engine = event.shaped(Item.of("ad_astra:ostrum_engine", 1), [
      "PKP",
      "PEP",
      "WFW"
    ], {
      K: "kubejs:fragment_of_knowledge_of_the_mines",
      P: "#forge:plates/ostrum",
      E: "ad_astra:desh_engine",
      F: "ad_astra:fan",
      W: "bloodmagic:reinforcedslate",
    });
    event.remove({id: "ad_astra:ostrum_tank"});
    event.shaped(Item.of("ad_astra:ostrum_tank", 1), [
      "PPW",
      "PTR",
      "PPW"
    ], {
      P: "#forge:plates/ostrum",
      T: "ad_astra:desh_tank",
      R: "#forge:rods/steel",
      W: "bloodmagic:reinforcedslate",
    });

    event.remove({id: "ad_astra:calorite_engine"});
    const custom_calorite_engine = event.shaped(Item.of("ad_astra:calorite_engine", 1), [
      "PKP",
      "PEP",
      "WFW"
    ], {
      K: "kubejs:fragment_of_knowledge_of_the_galaxies",
      P: "#forge:plates/calorite",
      E: "ad_astra:ostrum_engine",
      F: "ad_astra:fan",
      W: "#forge:ingots/terrasteel",
    });
    event.remove({id: "ad_astra:calorite_tank"});
    event.shaped(Item.of("ad_astra:calorite_tank", 1), [
      "PPW",
      "PTR",
      "PPW"
    ], {
      P: "#forge:plates/calorite",
      T: "ad_astra:ostrum_tank",
      R: "#forge:rods/steel",
      W: "nuclearcraft:fuel_californium_hecf_251_ox",
    });

    // pneumaticcraft
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/capacitor"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 3, item: "immersiveengineering:wire_steel"},{tag:"forge:slimeballs"},{item:"pneumaticcraft:plastic_brick_blue"},{item:"kubejs:decuplic_capacitor"}, {tag:"forge:ingots/compressed_iron"}],
      pressure: 1.0,
      results:[{item:"pneumaticcraft:capacitor"}]
    });
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/transistor"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 3, item: "immersiveengineering:wire_steel"},{item:"kubejs:flux_induced_iron"},{item:"pneumaticcraft:plastic_brick_gray"},{item:"kubejs:microchip_tier_1"}, {tag:"forge:ingots/compressed_iron"}],
      pressure: 1.0,
      results:[{item:"pneumaticcraft:transistor"}]
    });
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:pressure_chamber/empty_pcb"});
    event.custom({
      type: "pneumaticcraft:pressure_chamber",
      inputs: [{type:"pneumaticcraft:stacked_item", count: 3, item: "immersiveengineering:wire_electrum"},{item:"pneumaticcraft:plastic_brick_lime"},{item:"kubejs:microchip_tier_1"}, {tag:"forge:ingots/compressed_iron"}, {item:"mekanism:basic_control_circuit"}],
      pressure:1.5,
      results:[{count:1, item:"pneumaticcraft:empty_pcb"}]
    });
    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:air_compressor"});
    event.shaped(Item.of("pneumaticcraft:air_compressor", 1), [
      "RRR",
      "RVP",
      "RFR"
    ], {
      R: "ad_astra:desh_block",
      F: "ironfurnaces:obsidian_furnace",
      P: "pneumaticcraft:pressure_tube",
      V: "aether_redux:veridium_block",
    });
    event.replaceInput({mod: "pneumaticcraft", id: "pneumaticcraft:manual_compressor"}, "minecraft:red_dye", "#forge:ingots/desh");

    event.remove({mod: "pneumaticcraft", id: "pneumaticcraft:thermopneumatic_processing_plant"});
    event.shaped(Item.of("pneumaticcraft:thermopneumatic_processing_plant", 1), [
      "RFR",
      "SPS",
      "RFR"
    ], {
      F: "thermal:machine_frame",
      R: "pneumaticcraft:reinforced_stone_slab",
      P: "pneumaticcraft:pressure_tube",
      S: "pneumaticcraft:small_tank",
    });

    event.recipes.thermal.chiller(Item.of("pneumaticcraft:plastic", 1), Fluid.of("pneumaticcraft:plastic", 1000), 0, 2000);

    // bloodmagic
    // blood magic depends on desh. Replace all gold with it
    event.replaceInput({mod: "bloodmagic", input: "minecraft:gold_ingot"}, "minecraft:gold_ingot", "ad_astra:desh_ingot");
    event.replaceInput({mod: "bloodmagic", id: "bloodmagic:altar/slate"}, "#bookshelf:stones", "enderio:octadic_capacitor");

    // botania depends on ostrum
    // remove lingingrock. Use ostrum instead
    event.remove({mod: "botania", id: "botania:pure_daisy/livingrock"});
    event.recipes.botania.pure_daisy("botania:livingrock", "ad_astra:ostrum_block");
    event.remove({mod: "botania", id: "botania:mana_infusion/manasteel"});
    event.recipes.botania.mana_infusion("botania:manasteel_ingot", "enderio:redstone_alloy_ingot", 4000);
    event.remove({mod: "botania", id: "botania:terra_plate/terrasteel_ingot"});
    event.recipes.botania.terra_plate("botania:terrasteel_ingot", ["#forge:ingots/manasteel", "botania:mana_pearl", "botania:mana_diamond", "#forge:ingots/ironwood"], 50000);
    event.remove({mod: "botania", id: "botania:terra_plate"});
    event.shaped(Item.of("botania:terra_plate", 1), [
      "SPS",
      "1F5",
      "234"
    ], {
      1: "botania:rune_water",
      2: "botania:rune_earth",
      3: "botania:rune_mana",
      4: "botania:rune_air",
      5: "botania:rune_fire",
      S: "embers:dwarven_oil_bucket",
      P: "botania:manasteel_block",
      F: "embers:focal_lens",
    });

    // mekanismgenerator
    event.replaceInput({mod: "mekanismgenerators", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");

    // mekanism
    event.replaceInput({mod: "mekanism", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");
    event.replaceInput({mod: "mekanism", input: "#forge:dusts/redstone"}, "#forge:dusts/redstone", "enderio:redstone_alloy_ingot");
    event.replaceInput({mod: "mekanism", input: "minecraft:furnace"}, "minecraft:furnace", "ironfurnaces:obsidian_furnace");
    event.replaceInput({mod: "mekanism", id: "mekanism:metallurgic_infuser"}, "#forge:ingots/osmium", "mekanism:steel_casing") ;

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

    // mekanism control circuits
    event.remove({mod: "mekanism", id: "mekanism:control_circuit/advanced"});
    event.shaped(Item.of("mekanism:advanced_control_circuit", 1), [
      " M ",
      "ACA",
      " M "
    ], {
      M: "kubejs:microchip_tier_2",
      A: "mekanism:alloy_infused",
      C: "mekanism:basic_control_circuit",
    });

    event.remove({mod: "mekanism", id: "mekanism:control_circuit/elite"});
    event.shaped(Item.of("mekanism:elite_control_circuit", 1), [
      " M ",
      "ACA",
      " M "
    ], {
      M: "kubejs:microchip_tier_3",
      A: "mekanism:alloy_reinforced",
      C: "mekanism:advanced_control_circuit",
    });

    event.remove({mod: "mekanism", id: "mekanism:control_circuit/ultimate"});
    event.shaped(Item.of("mekanism:ultimate_control_circuit", 1), [
      " M ",
      "ACA",
      " M "
    ], {
      M: "ad_astra:calorite_tank",
      A: "mekanism:alloy_reinforced",
      C: "mekanism:elite_control_circuit",
    });

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
    // Rabbit's foot
    event.custom({
      "type":"mekanism:nucleosynthesizing",
      "duration":200,
      "gasInput":{"amount":1,"gas":"mekanism:antimatter"},
      "itemInput":{"ingredient":{"item":"minecraft:beef"}},
      "output":{"item":"minecraft:rabbit_foot"}
    });

    // nuclearcraft
    event.replaceInput({mod: "nuclearcraft", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");
    event.remove({mod: "nuclearcraft", id: "nuclearcraft:chassis"});
    event.shaped(Item.of("nuclearcraft:chassis", 1), [
      "SPM",
      "PUP",
      "MCS"
    ], {
      S: "#forge:ingots/soularium",
      P: "#forge:plates/steel",
      M: "#forge:ingots/magnesium",
      U: "#forge:ingots/uranium",
      C: "kubejs:microchip_tier_3",
    });
    //event.replaceOutput({mod: "nuclearcraft", id: "nuclearcraft:plate_advanced"}, "nuclearcraft:plate_advanced", "1x nuclearcraft:plate_advanced");

    // draconic evolution
    event.replaceInput({mod: "draconicevolution", input: "minecraft:redstone_block"}, "minecraft:redstone_block", "nuclearcraft:plate_advanced");
    event.remove({mod: "draconicevolution", id: "draconicevolution:components/draconium_core"});
    event.recipes.botania.runic_altar("draconicevolution:draconium_core", [
      "botania:elementium_ingot",
      "botania:elementium_ingot",
      "nuclearcraft:tough_alloy_ingot",
      "nuclearcraft:tough_alloy_ingot",
      "mekanism:ultimate_control_circuit",
      "#forge:ingots/uranium",
    ], 20000);

    event.custom({
      type:"mekanism:nucleosynthesizing",
      duration:1500,
      gasInput:{"amount":9,"gas":"mekanism:antimatter"},
      itemInput:{"ingredient":{"item":"draconicevolution:small_chaos_frag"}},
      output:{"item":"draconicevolution:medium_chaos_frag"}
    });

    // end remastered
    event.remove({mod: "endrem", id: "endrem:witch_eye"});
    event.shaped(Item.of("endrem:witch_eye", 1), [
      "EW ",
      "AB ",
      "XD "
    ], {
      E: "minecraft:ender_eye",
      W: "endrem:witch_pupil",
      A: "twilightforest:snow_queen_trophy",
      B: "twilightforest:ur_ghast_trophy",
      X: "mekanism:pellet_antimatter",
      D: "draconicevolution:wyvern_core",
    });


    // minecraft
    event.replaceInput({mod: "minecraft", id: "minecraft:piston"}, "#forge:ingots/iron", "kubejs:flux_induced_iron");

    
});

