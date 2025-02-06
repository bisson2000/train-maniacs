// priority: 0

ServerEvents.recipes(event => {

    // uncrafting
    event.remove({mod: "twilightforest", type: "twilightforest:uncrafting"});
});

// Portal activation requires dawnstone
ServerEvents.tags('item', event => {
    event.removeAll("twilightforest:portal/activator");
    //event.remove("twilightforest:portal/activator", "minecraft:diamond");
    event.add("twilightforest:portal/activator", "embers:dawnstone_ingot");
})