// priority: 0

ServerEvents.recipes(event => {

    //event.forEachRecipe({mod: "mekanism"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //});

    // combining
    [
        ["minecraft:iron_ore"],
        ["minecraft:deepslate_iron_ore"],
        ["minecraft:gold_ore"],
        ["minecraft:deepslate_gold_ore"],
        ["minecraft:copper_ore"],
        ["minecraft:deepslate_copper_ore"],
        ["minecraft:redstone_ore"],
        ["minecraft:deepslate_redstone_ore"],
        ["minecraft:coal_ore"],
        ["minecraft:deepslate_coal_ore"],
        ["minecraft:diamond_ore"],
        ["minecraft:deepslate_diamond_ore"],
        ["minecraft:emerald_ore"],
        ["minecraft:deepslate_emerald_ore"],
        ["minecraft:lapis_ore"],
        ["minecraft:deepslate_lapis_ore"],
        ["minecraft:nether_gold_ore"],
        ["minecraft:nether_quartz_ore"],
        ["minecraft:ancient_debris"],

        ["mekanism:lead_ore"],
        ["mekanism:deepslate_lead_ore"],
        ["mekanism:tin_ore"],
        ["mekanism:deepslate_tin_ore"],
        ["mekanism:uranium_ore"],
        ["mekanism:deepslate_uranium_ore"],
        ["mekanism:fluorite_ore"],
        ["mekanism:deepslate_fluorite_ore"],
        ["mekanism:osmium_ore"],
        ["mekanism:deepslate_osmium_ore"],
    ].forEach((removedOutputInfo) => {
        const [removedOutput] = removedOutputInfo;
        event.remove({mod:"mekanism", type:"mekanism:combining", output: removedOutput})
    });

    // items
    [
        ["mekanism:quantum_entangloporter"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "mekanism", id: recipeID});
    });

    // Teleporter
    event.remove({id: "mekanism:teleporter"});
    event.remove({id: "mekanism:teleporter_frame"});

    // glowstone
    event.remove({mod: "mekanism", id: "mekanism:nucleosynthesizing/glowstone_block"});

    // spent nuclear waste
    event.custom({
        type:"mekanism:rotary",
        fluidInput:{amount:1, tag:"forge:oxygen"},
        fluidOutput:{amount:1, fluid:"mekanism:oxygen"},
        gasInput:{amount:1, gas:"mekanism:spent_nuclear_waste"},
        gasOutput:{amount:1, gas:"mekanism:oxygen"}
    });

    // sand and gravel
    event.remove({mod: "mekanism", id: "mekanism:crushing/cobblestone_to_gravel"});
    event.remove({mod: "mekanism", id: "mekanism:crushing/gravel_to_sand"});

    // Lithium
    event.remove({mod: "mekanism", id: "mekanism:crystallizing/lithium"});
    event.custom({
        "type":"mekanism:crystallizing",
        "chemicalType":"gas",
        "input":{"amount":100,"gas":"mekanism:lithium"},
        "output":{"item":"nuclearcraft:lithium_dust"}
    });


    // TODO: Units for armor
});