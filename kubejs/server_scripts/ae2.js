// priority: 0

ServerEvents.recipes(event => {

    [
        ["ae2:network/blocks/quantum_link"],
        ["ae2:network/blocks/quantum_ring"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "ae2", id: recipeID});
    });

    // AE2WTLib quantum bridge card
    event.remove({mod: "ae2wtlib", id: "ae2wtlib:quantum_bridge_card"});
    event.shaped(
        Item.of('ae2wtlib:quantum_bridge_card', 1),
        [
          '   ',
          'FNF',
          ' W '
        ],
        {
          F: "ae2:fluix_pearl",
          N: '#forge:nether_stars',
          W: 'ae2:wireless_receiver',
        }
    );

});