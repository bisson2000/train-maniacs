// priority: 0

ServerEvents.recipes(event => {

  // scanner
  event.remove({mod: "scannable", id: "scannable:scanner"});
  event.shaped(Item.of('scannable:scanner', 1), [
    'S S',
    'DGD',
    'PCP'
  ], {
    S: "#forge:rods/wooden",
    G: '#forge:glass',
    D: '#forge:cobblestone/deepslate',
    P: "minecraft:pointed_dripstone",
    C: "#forge:charcoal"
  });

  // modules
  event.shaped(Item.of('scannable:blank_module', 1), [
      'KKK',
      'KKK',
      ' Y '
    ], {
      K: "minecraft:dried_kelp",
      Y: 'minecraft:yellow_dye',
  });

  event.remove({mod: "scannable", id: "scannable:common_ores_module"});
  event.shapeless(
    Item.of('scannable:common_ores_module', 1), // arg 1: output
    [
      "1x scannable:blank_module",
      "1x #forge:charcoal",
    ]
  );

  event.remove({mod: "scannable", id: "scannable:rare_ores_module"});
  event.shapeless(
    Item.of('scannable:rare_ores_module', 1), // arg 1: output
    [
      "1x scannable:blank_module",
      "1x #forge:ingots/iron",
    ]
  );
});