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
});

JEIEvents.hideFluids(event => {
  //event.hide('example:fluid')
});