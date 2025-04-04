// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
 
    event.shaped(Item.of("simplyjetpacks:armorplating_te2", 1), [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "#forge:ingots/bronze",
        B: "#forge:ingots/iron"
    });

    event.shaped(Item.of("simplyjetpacks:armorplating_te3", 1), [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "#forge:ingots/invar",
        B: "#forge:ingots/bronze"
    });

    event.shaped(Item.of("simplyjetpacks:armorplating_te4", 1), [
        "ABA",
        "BAB",
        "ABA"
    ], {
        A: "#forge:ingots/enderium",
        B: "#forge:ingots/invar"
    });

    // Flux chestplate
    event.replaceInput({mod: "simplyjetpacks", id: "simplyjetpacks:thermal/jetpack_te5_alt"}, "simplyjetpacks:armorplating_te5", "draconicevolution:wyvern_core");

});
