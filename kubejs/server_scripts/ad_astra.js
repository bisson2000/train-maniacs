// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
    
    // rods
    [
        ["ad_astra:iron_rod"],
        ["ad_astra:steel_rod"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "ad_astra", id: recipeID});
    });

    
    // Remove compressor
    event.remove({mod: "ad_astra", type: "ad_astra:compressing"});
    event.remove({id: "ad_astra:compressor"});

    // alloying in the etrionic blast furnace
    event.remove({mod: "ad_astra", id: "ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals"});
    event.custom({
        type: "ad_astra:alloying",
        cookingtime: 100,
        energy: 20,
        ingredients: [{tag:"forge:ingots/iron"}, {tag:"forge:dusts/coal"}, {tag:"forge:dusts/coal"}, {tag:"forge:dusts/coal"}],
        result: {count:1, id:"mekanism:ingot_steel"}
    });

    // remove engines. They are now unlocked through stages
    //event.stage({output: "ad_astra:steel_engine"}, "tier_1_rocket");
    //event.stage({output: "ad_astra:desh_engine"}, "tier_1_rocket");
    //event.stage({output: "ad_astra:ostrum_engine"}, "tier_3_rocket");
    //event.stage({output: "ad_astra:calorite_engine"}, "tier_4_rocket");
});
