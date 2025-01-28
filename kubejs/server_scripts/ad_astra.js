// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {
    
    // rods
    [
        ["ad_astra:iron_rod"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "ad_astra", id: recipeID});
    });
});