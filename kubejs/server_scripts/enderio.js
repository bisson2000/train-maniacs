// priority: 0

ServerEvents.recipes(event => {

    // remove crafter. it is buggy and stops working at some moments
    event.remove({mod: "enderio", id: "enderio:crafter"});

    // gear
    event.remove({mod:"enderio", id:"enderio:iron_gear"});

    // ender dust:
    event.remove({mod: "enderio", id: "enderio:alloy_smelting/ender_pearl"});
    event.recipes.enderio.alloy_smelting("minecraft:ender_pearl", ["1x #forge:dusts/ender_pearl"]);
    event.remove({mod: "enderio", id: "enderio:sag_milling/ender_pearl"});
    event.recipes.enderio.sag_milling(["1x #forge:dusts/ender_pearl"], "minecraft:ender_pearl");
});