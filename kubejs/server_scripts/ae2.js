// priority: 0

ServerEvents.recipes(event => {

    [
        ["ae2:network/blocks/quantum_link"],
        ["ae2:network/blocks/quantum_ring"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "ae2", id: recipeID});
    });

});