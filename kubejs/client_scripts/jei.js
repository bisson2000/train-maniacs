// priority: 0

// Note, those are run on startup
JEIEvents.hideItems(event => {

  // Botania
  event.hide(Item.of("botania:orechid"));
  event.hide(Item.of("botania:orechid_ignem"));
  event.hide(Item.of("botania:floating_orechid"));
  event.hide(Item.of("botania:floating_orechid_ignem"));

  // Thermal
  event.hide(Item.of("thermal:ender_pearl_dust"));

  // enderio
  event.hide(Item.of("enderio:powdered_ender_pearl"));
  event.hide(Item.of("enderio:crafter"));

  // extendedcrafting
  event.hide(Item.of("extendedcrafting:redstone_nugget"));
  event.hide(Item.of("extendedcrafting:redstone_ingot"));
  event.hide(Item.of("extendedcrafting:redstone_ingot_block"));

  // mekanism
  event.hide(Item.of("mekanism:digital_miner"));

  // immersiveengineering
});

JEIEvents.hideFluids(event => {
  // embers
  event.hide(Fluid.of("embers:molten_iron"));
  event.hide(Fluid.of("embers:molten_gold"));
  event.hide(Fluid.of("embers:molten_copper"));
  event.hide(Fluid.of("embers:molten_lead"));
  event.hide(Fluid.of("embers:molten_silver"));
  event.hide(Fluid.of("embers:molten_nickel"));
  event.hide(Fluid.of("embers:molten_tin"));
  event.hide(Fluid.of("embers:molten_aluminum"));
  event.hide(Fluid.of("embers:molten_zinc"));
  event.hide(Fluid.of("embers:molten_platinum"));
  event.hide(Fluid.of("embers:molten_uranium"));
  event.hide(Fluid.of("embers:molten_bronze"));
  event.hide(Fluid.of("embers:molten_electrum"));
  event.hide(Fluid.of("embers:molten_brass"));
  event.hide(Fluid.of("embers:molten_constantan"));
  event.hide(Fluid.of("embers:molten_invar"));
  
  // createbigcannons
  event.hide(Fluid.of("createbigcannons:molten_bronze"));
  event.hide(Fluid.of("createbigcannons:molten_steel"));
  
  // nuclearcraft
  event.hide(Fluid.of("nuclearcraft:iron"));
  event.hide(Fluid.of("nuclearcraft:copper"));
  event.hide(Fluid.of("nuclearcraft:gold"));
  event.hide(Fluid.of("nuclearcraft:tin"));
  event.hide(Fluid.of("nuclearcraft:lead"));
  event.hide(Fluid.of("nuclearcraft:zinc"));
  event.hide(Fluid.of("nuclearcraft:aluminum"));
  event.hide(Fluid.of("nuclearcraft:silver"));
  event.hide(Fluid.of("nuclearcraft:uranium"));
  event.hide(Fluid.of("nuclearcraft:cobalt"));
  event.hide(Fluid.of("nuclearcraft:platinum"));
  event.hide(Fluid.of("nuclearcraft:bronze"));
  event.hide(Fluid.of("nuclearcraft:steel"));
  event.hide(Fluid.of("nuclearcraft:electrum"));
  event.hide(Fluid.of("nuclearcraft:enderium"));
  event.hide(Fluid.of("nuclearcraft:redstone"));
  event.hide(Fluid.of("nuclearcraft:lithium"));
  event.hide(Fluid.of("nuclearcraft:sodium"));

  // tconstruct
  event.hide(Fluid.of("tconstruct:molten_ender"));

  // ad_astra
  event.hide(Fluid.of("ad_astra:oil"));
});