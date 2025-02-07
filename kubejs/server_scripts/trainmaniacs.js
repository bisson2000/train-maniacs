// priority: 1

ServerEvents.recipes(event => {

    /**
     * TODOs: 
     * Portals to dimensions
     * Modify botania
     * Modify cobblefordays recipes
     * Mekanims: nerf  ethylene with configs
     * Mekanims: nerf remove nuclear waste - done
     * Modify mekanism fusion reactor recipe - Not needed. it depends on fluorite
     * Remove waystones for draconic evolution dislocators? - done
     * Remove bigreactors? - done
     * infinite end stone - done
     * infinite grains of infinity - done
     * microchip tier 3 with advanced oil processing - done. With lubricant
     * Disable enderio
     * infinite ender pearls - done
     * infinite nether stars: nether spawner + killer - done
     * blood farm idea: Well of Suffering - done
     * explain infinite glowstone loop. Make cinder flour easier? - done
     * 
     * Lock rocket crafting behin progression
     * Tier 1: Silver key
     * Tier 3: Gold key (Infernal)
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
        'ZGD',
        'GHG', // arg 2: the shape (array of strings)
        'DGZ'
      ],
      {
        Z: 'create:zinc_ingot',
        D: 'embers:dawnstone_ingot',
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
    event.replaceInput({mod:"enderio", id: "enderio:alloy_smelter"}, "minecraft:furnace", "enderio:primitive_alloy_smelter");
    
    event.remove({mod: "enderio", id: "enderio:alloy_smelting/redstone_alloy_ingot"});
    event.recipes.enderio.alloy_smelting(Item.of("enderio:redstone_alloy_ingot"), 
      ["kubejs:flux_induced_iron", "#forge:silicon", "#forge:ingots/graphite"],
      3200,
      1.0
    );

    event.recipes.enderio.alloy_smelting(Item.of("minecraft:end_stone"), // end stone
      ["#forge:sand", "aether:ambrosium_shard"],
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
    event.replaceInput({mod: "ad_astra", id: "ad_astra:coal_generator"}, "minecraft:furnace", "thermal:machine_frame");
    event.replaceInput({mod: "ad_astra", id: "ad_astra:fuel_refinery"}, "minecraft:furnace", "thermal:machine_frame");
    event.replaceInput({mod: "ad_astra", id: "ad_astra:fuel_refinery"}, "minecraft:bucket", "enderio:octadic_capacitor");

    // ad_astra rockets
    event.remove({mod: "ad_astra", id: "ad_astra:desh_engine"});
    event.shaped(Item.of("ad_astra:desh_engine", 1), [
      "PPP",
      "PEP",
      "WFW"
    ], {
      P: "#forge:plates/desh",
      E: "ad_astra:steel_engine",
      F: "ad_astra:fan",
      W: "#forge:wires/gold",
    });
    event.remove({mod: "ad_astra", id: "ad_astra:desh_tank"});
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

    event.remove({mod: "ad_astra", id: "ad_astra:ostrum_engine"});
    event.shaped(Item.of("ad_astra:ostrum_engine", 1), [
      "PPP",
      "PEP",
      "WFW"
    ], {
      P: "#forge:plates/ostrum",
      E: "ad_astra:desh_engine",
      F: "ad_astra:fan",
      W: "bloodmagic:reinforcedslate",
    });
    event.remove({mod: "ad_astra", id: "ad_astra:ostrum_tank"});
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

    // mekanismgenerator
    event.replaceInput({mod: "mekanismgenerators", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");

    // mekanism
    event.replaceInput({mod: "mekanism", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");
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

    // bigreactors
    //event.replaceInput({mod: "bigreactors", input: "minecraft:redstone"}, "minecraft:redstone", "enderio:redstone_alloy_ingot");

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

    // draconic evolution
    event.remove({mod: "draconicevolution", id: "draconicevolution:components/draconium_core"});
    event.recipes.botania.runic_altar("draconicevolution:draconium_core", [
      "2x botania:elementium_ingot",
      "2x nuclearcraft:tough_alloy_ingot",
      "1x #forge:ingots/uranium",
    ], 80000);


    // minecraft
    event.replaceInput({mod: "minecraft", id: "minecraft:piston"}, "#forge:ingots/iron", "kubejs:flux_induced_iron");

    
});