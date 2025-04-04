// priority: 0

ServerEvents.recipes(event => {

    event.remove({mod: "cobblefordays", id: "cobblefordays:tier_2"});
    event.shaped(Item.of("cobblefordays:tier_2", 1), [
        "ZZZ",
        "WCL",
        "ZZZ"
    ], {
        C: "cobblefordays:tier_1",
        W: "minecraft:water_bucket",
        L: "minecraft:lava_bucket",
        Z: "#forge:cobblestone",
    });

    event.remove({mod: "cobblefordays", id: "cobblefordays:tier_3"});
    event.shaped(Item.of("cobblefordays:tier_3", 1), [
        "ZZZ",
        "WCL",
        "ZZZ"
    ], {
        C: "cobblefordays:tier_2",
        W: "minecraft:water_bucket",
        L: "minecraft:lava_bucket",
        Z: "kubejs:flux_induced_iron",
    });

    event.remove({mod: "cobblefordays", id: "cobblefordays:tier_4"});
    event.shaped(Item.of("cobblefordays:tier_4", 1), [
        "ZZZ",
        "WCL",
        "ZZZ"
    ], {
        C: "cobblefordays:tier_3",
        W: "minecraft:water_bucket",
        L: "minecraft:lava_bucket",
        Z: "#forge:ingots/dawnstone",
    });

    event.remove({mod: "cobblefordays", id: "cobblefordays:tier_5"});
    event.shaped(Item.of("cobblefordays:tier_5", 1), [
        "ZMZ",
        "WCL",
        "ZMZ"
    ], {
        C: "cobblefordays:tier_4",
        W: "minecraft:water_bucket",
        L: "minecraft:lava_bucket",
        Z: "#forge:ingots/desh",
        M: "#forge:dusts/diamond",
    });

});