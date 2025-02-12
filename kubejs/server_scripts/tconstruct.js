// priority: 0

ServerEvents.recipes(event => {

    

    // molten_enderium
    [
        "tconstruct:melting",
        "tconstruct:entity_melting",
        "tconstruct:material_melting",
    ].forEach(recipeType => {
        event.forEachRecipe({mod: "tconstruct", type: recipeType}, recipe => {
            if (recipe.json
                && recipe.json.getAsJsonObject("result")
                && recipe.json.getAsJsonObject("result").get("tag")
                && recipe.json.getAsJsonObject("result").get("tag").asString === "forge:ender"
            ) {
                recipe.json.getAsJsonObject("result").remove("tag");
                recipe.json.getAsJsonObject("result").addProperty("fluid", "thermal:ender");
                recipe.save();
            }
            
            if (
                recipe.json
                && recipe.json.getAsJsonArray("byproducts")
            ) {
                recipe.json.getAsJsonArray("byproducts").forEach(bp => {
                    if (bp.get("tag") && bp.get("tag").asString === "forge:ender") {
                        bp.remove("tag");
                        bp.addProperty("fluid", "thermal:ender");
                        recipe.save();
                    }
                });
            }
        });
    })

    
    // dawnstone

    // melting
    event.custom({
        "type":"tconstruct:alloy",
        "conditions":[
        ],
        "inputs":[
            {"amount":90,"tag":"forge:molten_gold"},
            {"amount":90,"tag":"forge:molten_copper"}
        ],
        "result":{
            "amount":180,
            "fluid":"embers:molten_dawnstone"
        },
        "temperature":760
    });
    event.custom({
        "type":"tconstruct:melting",
        "ingredient":{"item":"embers:dawnstone_block"},
        "result":{"amount":810,"fluid":"embers:molten_dawnstone"},
        "temperature":760,
        "time":180
    });
    event.custom({
        "type":"tconstruct:melting",
        "ingredient":{"item":"embers:dawnstone_ingot"},
        "result":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "temperature":760,
        "time":60
    });
    event.custom({
        "type":"tconstruct:melting",
        "ingredient":{"item":"embers:dawnstone_nugget"},
        "result":{"amount":10,"fluid":"embers:molten_dawnstone"},
        "temperature":760,
        "time":20
    });
    event.custom({
        "type":"tconstruct:melting",
        "ingredient":{"item":"embers:dawnstone_plate"},
        "result":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "temperature":760,
        "time":60
    });
    // ingot
    event.custom({
        "type":"tconstruct:casting_table",
        "cast":{"tag":"tconstruct:casts/single_use/ingot"},
        "cast_consumed":true,
        "cooling_time":60,
        "fluid":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "result":"embers:dawnstone_ingot"
    });
    event.custom({
        "type":"tconstruct:casting_table",
        "cast":{"tag":"tconstruct:casts/multi_use/ingot"},
        "cooling_time":60,
        "fluid":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "result":"embers:dawnstone_ingot"
    });
    // nugget
    event.custom({
        "type":"tconstruct:casting_table",
        "cast":{"tag":"tconstruct:casts/single_use/nugget"},
        "cast_consumed":true,
        "cooling_time":20,
        "fluid":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "result":"embers:dawnstone_nugget"
    });
    event.custom({
        "type":"tconstruct:casting_table",
        "cast":{"tag":"tconstruct:casts/multi_use/nugget"},
        "cooling_time":20,
        "fluid":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "result":"embers:dawnstone_nugget"
    });
    // block
    event.custom({
        "type":"tconstruct:casting_basin",
        "cooling_time":180,
        "fluid":{"amount":810,"fluid":"embers:molten_dawnstone"},
        "result":"embers:dawnstone_block"
    });
    // plate
    event.custom({
        "type":"tconstruct:casting_table",
        "cast":{"tag":"tconstruct:casts/multi_use/plate"},
        "cooling_time":60,
        "fluid":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "result":{"item":"embers:dawnstone_plate"}
    });

    // faucet requires dawnstone
    event.remove({mod: "tconstruct", id: "tconstruct:smeltery/seared/faucet"});
    event.shaped(
        Item.of('tconstruct:seared_faucet', 1), [
          '   ',
          'BVB',
          ' B '
        ], {
          V: 'extendedcrafting:ender_ingot',
          B: 'tconstruct:seared_brick',
        }
    );
    event.remove({mod: "tconstruct", id: "tconstruct:smeltery/scorched/faucet"});
    event.shaped(
        Item.of('tconstruct:scorched_faucet', 1), [
          '   ',
          'BVB',
          ' B '
        ], {
          V: 'extendedcrafting:ender_ingot',
          B: 'tconstruct:scorched_brick',
        }
    );

    // aspectus
    event.custom({
        "type":"tconstruct:casting_table",
        "cast":{"item": "embers:ember_shard"},
        "cast_consumed":true,
        "cooling_time":60,
        "fluid":{"amount":90,"fluid":"embers:molten_dawnstone"},
        "result":"embers:dawnstone_aspectus"
    });

    //event.forEachRecipe({mod: "kubejs", type: "tconstruct:alloy"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //});

    //event.replaceOutput({mod: "tconstruct", output: "forge:molten"})

    //event.forEachRecipe({mod: "tconstruct"}, recipe => {
    //    console.info(`recipe: ${recipe.json}`);
    //});
});