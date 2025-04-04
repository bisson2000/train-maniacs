GameStageEvents.stageAdded(event => {
    const stageAdded = event.getStage();
    console.info(`stage: ${stageAdded}`);
    console.info(`event: ${event}`);
    //event.getServer().recipeManager
    
});
  
GameStageEvents.stageRemoved(event => {
    const stageRemoved = event.getStage();
});

PlayerEvents.inventoryChanged(event => {
    
    //newItem.getItem().idLocation()
    if (event.item && event.item.getItem() && (event.item.getItem().mod === "aether" || event.item.getItem().mod === "lost_aether_content")) {
        const location = event.item.getItem().idLocation.toString();
        if (location === "aether:bronze_dungeon_key" && !event.player.getStages().has("tier_1_rocket")) {
            event.server.runCommand("gamestage add @p tier_1_rocket");
        }
        if (location === "aether:silver_dungeon_key" && !event.player.getStages().has("tier_2_rocket")) {
            event.server.runCommand("gamestage add @p tier_2_rocket");
        }
        if (location === "aether:gold_dungeon_key" && !event.player.getStages().has("tier_3_rocket")) {
            event.server.runCommand("gamestage add @p tier_3_rocket");
        }
        if (location === "lost_aether_content:platinum_key" && !event.player.getStages().has("tier_4_rocket")) {
            event.server.runCommand("gamestage add @p tier_4_rocket");
        }
    }
});