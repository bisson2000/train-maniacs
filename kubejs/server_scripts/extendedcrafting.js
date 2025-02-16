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

  // luminessence
  event.replaceInput({mod: "extendedcrafting", id: "extendedcrafting:luminessence"}, "minecraft:gunpowder", "enderio:photovoltaic_composite");

  // ender ingot with dawnstone
  event.replaceInput({mod: "extendedcrafting", id: "extendedcrafting:ender_ingot"}, "minecraft:iron_ingot", "embers:dawnstone_ingot");

  // black iron
  event.remove({mod: "extendedcrafting", id: "extendedcrafting:black_iron_ingot"});
  event.forEachRecipe({mod: "extendedcrafting", id: "extendedcrafting:enhanced_ender_ingot"}, recipe => {
      //console.info(`recipe: ${recipe.json}`);
  });
  event.custom({"type":"extendedcrafting:shaped_ender_crafter",
    "pattern":
    [
      "CEC",
      "EBE",
      "IEI"
    ],
    "key":{
      "B":{"item":"bloodmagic:blankrune"},
      "E":{"item":"thermal:enderium_ingot"},
      "C":{"item":"ad_astra:cheese_block"},
      "I":{"item":"createaddition:iron_wire"},
    },
    "result":{
      "item":"extendedcrafting:black_iron_ingot","count":4
    }
  });

  // old idea: Craft end eyes with ultimate crafting
  // new idea: do not use extended crafting for that. Just make the mobs drop them
  // old_eye based on ancient remnant (eye of desert, cursed pyramid)
  // corrupted_eye based on netherite monstrosity (eye of monstrous, forge of souls)
  // lost_eye based on harbringer (eye of mech, ancient factory)
  // cryptic_eye based on leviathan (eye of abyss, sunken city)
  // nether_eye based on ignis (eye of flame, sunken city)
  // cold_eye based on maledictus (eye of curse, Frosted prison)

  // keep extendedcrafting for its compressor, encouraging more mining

});