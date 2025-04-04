// priority: 0

ServerEvents.recipes(event => {

    // compass
    event.remove({mod: "explorerscompass", id: "explorerscompass:explorers_compass"});
    event.shaped(Item.of("explorerscompass:explorerscompass", 1), [
        "ABC",
        "HZD",
        "GFE"
    ], {
        A: Item.of("twilightforest:naga_trophy"),
        B: Item.of("twilightforest:lich_trophy"),
        C: Item.of("twilightforest:minoshroom_trophy"),
        D: Item.of("twilightforest:hydra_trophy"),
        E: Item.of("twilightforest:knight_phantom_trophy"),
        F: Item.of("twilightforest:ur_ghast_trophy"),
        G: Item.of("twilightforest:alpha_yeti_trophy"),
        H: Item.of("twilightforest:snow_queen_trophy"),
        Z: "minecraft:compass",
    });
});