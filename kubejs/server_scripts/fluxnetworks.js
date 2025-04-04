// priority: 0

ServerEvents.recipes(event => {
    
    event.recipes.enderio.alloy_smelting(Item.of("fluxnetworks:flux_dust"), [Item.of("enderio:redstone_alloy_ingot"), "#forge:dusts/obsidian"]);
    event.recipes.thermal.smelter([Item.of("fluxnetworks:flux_dust")], [Item.of("enderio:redstone_alloy_ingot"), "#forge:dusts/obsidian"]);

});