// priority: 1

ServerEvents.recipes(event => {

    /**
     * All dank storages will use subsequent mods
     * Therefore priority is 1
     */

    // 1 is fine
    event.replaceInput({mod: "dankstorage", input: "minecraft:redstone_block"}, "minecraft:redstone_block", "enderio:redstone_alloy_block"); // 2
    event.replaceInput({mod: "dankstorage", input: "minecraft:gold_block"}, "minecraft:gold_block", "create:rotation_speed_controller"); // 3
    event.replaceInput({mod: "dankstorage", input: "minecraft:emerald_block"}, "minecraft:emerald_block", "enderio:octadic_capacitor"); // 4
    event.replaceInput({mod: "dankstorage", input: "minecraft:diamond_block"}, "minecraft:diamond_block", "ad_astra:ostrum_block"); // 5
    event.replaceInput({mod: "dankstorage", input: "minecraft:crying_obsidian"}, "minecraft:crying_obsidian", "pneumaticcraft:kerosene_bucket");  // 6
    // 7 is fine
});