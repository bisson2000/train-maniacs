// priority: 0

ServerEvents.recipes(event => {

    // eyes
    event.replaceInput({mod: "cataclysm", id: "cataclysm:mech_eye"}, "minecraft:ender_eye", "twilightforest:lich_trophy");
    event.replaceInput({mod: "cataclysm", id: "cataclysm:flame_eye"}, "minecraft:ender_eye", "twilightforest:ur_ghast_trophy");
    event.replaceInput({mod: "cataclysm", id: "cataclysm:monstrous_eye"}, "minecraft:ender_eye", "twilightforest:naga_trophy");
    event.replaceInput({mod: "cataclysm", id: "cataclysm:abyss_eye"}, "minecraft:ender_eye", "twilightforest:alpha_yeti_trophy");
    event.replaceInput({mod: "cataclysm", id: "cataclysm:desert_eye"}, "minecraft:ender_eye", "twilightforest:minoshroom_trophy");
    event.replaceInput({mod: "cataclysm", id: "cataclysm:cursed_eye"}, "minecraft:ender_eye", "twilightforest:snow_queen_trophy");
});