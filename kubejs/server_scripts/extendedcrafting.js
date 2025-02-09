// priority: 0

ServerEvents.recipes(event => {

  // remove redstone ingot completely and replace it by flux-induced
  event.remove({mod: "extendedcrafting", id: "extendedcrafting:redstone_ingot"});
  event.remove({mod: "extendedcrafting", id: "extendedcrafting:redstone_ingot_block"});
  event.remove({mod: "extendedcrafting", id: "extendedcrafting:redstone_ingot_block_uncraft"});
  event.replaceInput({mod: "extendedcrafting", input: "extendedcrafting:redstone_ingot"}, "extendedcrafting:redstone_ingot", "kubejs:flux_induced_iron");

  event.remove({mod: "extendedcrafting", id: "extendedcrafting:enhanced_redstone_ingot"});
  event.custom({
    "type":"extendedcrafting:shaped_flux_crafter",
    "powerRequired":800000,
    "pattern":[
      " E ",
      "ESE",
      " E "
    ],
    "key":{
      "S":{"item":"extendedcrafting:flux_star"},
      "E":{"item":"kubejs:flux_induced_iron"}
    },
    "result":{
      "item":"extendedcrafting:enhanced_redstone_ingot","count":4
    }
  });

  // ender ingot with dawnstone
  event.replaceInput({mod: "extendedcrafting", id: "extendedcrafting:ender_ingot"}, "minecraft:iron_ingot", "embers:dawnstone_ingot")

});