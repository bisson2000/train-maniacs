// priority: 0

ServerEvents.recipes(event => {

    // uncrafting
    event.remove({mod: "twilightforest", type: "twilightforest:uncrafting"});

    // liveroot
    event.shapeless(
        Item.of("twilightforest:liveroot", 1), // arg 1: output
        [
          "1x twilightforest:torchberries",
          "1x #minecraft:logs",
        ]
    );
});

// Portal activation requires dawnstone
ServerEvents.tags("item", event => {
    event.removeAll("twilightforest:portal/activator");
    //event.remove("twilightforest:portal/activator", "minecraft:diamond");
    event.add("twilightforest:portal/activator", "embers:dawnstone_ingot");
})