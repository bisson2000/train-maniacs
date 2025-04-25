// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {

    // hammer recipes
    event.forEachRecipe({mod: "immersiveengineering", input:"immersiveengineering:hammer"}, recipe => {
        if (recipe.getId() != "immersiveengineering:crafting/survey_tools" 
        && recipe.getId() != "immersiveengineering:crafting/gunpart_barrel") {
            recipe.remove();
        }
    });

    // rods
    [
        ["immersiveengineering:metalpress/rod_aluminum"],
        ["immersiveengineering:metalpress/rod_electrum"],
        ["immersiveengineering:metalpress/rod_brass"],
        ["immersiveengineering:metalpress/rod_steel"],
        ["immersiveengineering:metalpress/rod_copper"],
        ["immersiveengineering:metalpress/rod_gold"],
        ["immersiveengineering:metalpress/rod_iron"],
        ["immersiveengineering:crafting/stick_aluminum"],
        ["immersiveengineering:crafting/stick_steel"],
        ["immersiveengineering:crafting/stick_iron"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "immersiveengineering", id: recipeID});
    });

    // mechanical components
    [
      ["immersiveengineering:crafting/component_iron"],
        ["immersiveengineering:crafting/component_steel"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "immersiveengineering", id: recipeID});
    });
    event.shaped(Item.of("immersiveengineering:component_iron", 1),
    [
        "IRI",
        "RCR",
        "IRI"
    ],
    {
        I: "#forge:plates/iron",
        R: "kubejs:flux_induced_iron",
        C: "#forge:ingots/copper",
    });
    event.shaped(Item.of("immersiveengineering:component_steel", 1),
    [
        "IRI",
        "RCR",
        "IRI"
    ],
    {
        I: "#forge:plates/steel",
        R: "#forge:ingots/redstone_alloy",
        C: "#forge:ingots/copper",
    });

    // coal coke
    event.forEachRecipe({mod: "immersiveengineering", type:"immersiveengineering:coke_oven"}, recipe => {
        if (recipe.json && recipe.json.getAsJsonObject("result") && recipe.json.getAsJsonObject("result").get("tag")) {
            recipe.json.getAsJsonObject("result").remove("tag");
            recipe.json.getAsJsonObject("result").addProperty("item", "thermal:coal_coke");
            recipe.save();
        }
    });
    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/coke_to_coal_coke"});
    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/coal_coke_to_coke"});

    // Capacitors, aka accumulator
    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/capacitor_lv"});
    event.shaped(Item.of("immersiveengineering:capacitor_lv", 1), // arg 1: output
    [
        "LLL",
        "WSW", // arg 2: the shape (array of strings)
        "TCT"
    ],
    {
        L: "#forge:plates/lead",
        W: "immersiveengineering:wirecoil_copper",
        T: "#forge:treated_wood",
        C: "immersiveengineering:clinker_brick",
        S: "immersiveengineering:sheetmetal_iron"
    });

    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/capacitor_mv"});
    event.shaped(Item.of("immersiveengineering:capacitor_mv", 1), // arg 1: output
    [
        "BBB",
        "WSW", // arg 2: the shape (array of strings)
        "TCT"
    ],
    {
        B: "#forge:plates/bronze",
        W: "immersiveengineering:wirecoil_electrum",
        T: "#forge:treated_wood",
        C: "immersiveengineering:clinker_brick",
        S: "immersiveengineering:capacitor_lv"
    });

    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/capacitor_hv"});
    event.shaped(Item.of("immersiveengineering:capacitor_hv", 1), // arg 1: output
    [
        "BBB",
        "WSW", // arg 2: the shape (array of strings)
        "TCT"
    ],
    {
        B: "#forge:plates/aluminum",
        W: "immersiveengineering:wirecoil_electrum_ins",
        T: "#forge:treated_wood",
        C: "immersiveengineering:clinker_brick",
        S: "immersiveengineering:capacitor_mv"
    });

    // Remove excavator - won"t do

    // Oil refining¸
    event.custom({
        "type":"immersiveengineering:refinery",
        "catalyst":{"tag":"forge:ingots/compressed_iron"},
        "energy":80,
        "input0":{"amount":8,"tag":"forge:plantoil"},
        "input1":{"amount":8,"tag":"forge:ethanol"},
        "result":{"amount":16,"fluid":"pneumaticcraft:oil"}
    });

});