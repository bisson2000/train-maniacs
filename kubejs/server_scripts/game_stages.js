GameStageEvents.stageAdded(event => {
    const stageAdded = event.getStage();
    console.info(`stage: ${stageAdded}`);
    console.info(`event: ${event}`);
    //event.getServer().recipeManager
    
});
  
GameStageEvents.stageRemoved(event => {
    const stageRemoved = event.getStage();
});