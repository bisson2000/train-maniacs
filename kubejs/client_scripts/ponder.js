// The registry

Ponder.tags((event) => {
    /**
     * "kubejs:getting_started" -> the tag name
     * "minecraft:paper"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:getting_started", "kubejs:fragment_of_knowledge_of_the_sky", "Glossary", "Glossary", [ // "kubejs:fragment_of_knowledge_of_the_sky"
        // some default items
        "create:zinc_block",
        "ad_astra:cheese_block",
        "ad_astra:ostrum_block",
        "mekanism:block_uranium",
        "ad_astra:calorite_block",
        "mekanism:block_fluorite",
        "minecraft:end_stone_bricks",
        "minecraft:end_stone_bricks",
        "minecraft:end_stone_bricks",
        "draconicevolution:awakened_draconium_block",
    ]);
});


Ponder.registry((event) => {

    [
        ["twilight_portal_scene", "create:zinc_block", "Twilight Forest", "flint_and_steel", "flint and steel"],
        ["moon_portal_scene", "ad_astra:cheese_block", "Moon", "mekanism:ingot_osmium", "osmium ingot"],
        ["mars_portal_scene", "ad_astra:ostrum_block", "Mars", "flint_and_steel", "flint and steel"],
        ["mercury_portal_scene", "mekanism:block_uranium", "Mercury", "flint_and_steel", "flint and steel"],
        ["venus_portal_scene", "ad_astra:calorite_block", "Venus", "flint_and_steel", "flint and steel"],
        ["glacio_portal_scene", "mekanism:block_fluorite", "Glacio", "flint_and_steel", "flint and steel"],
        ["end_portal_scene", "minecraft:end_stone_bricks", "End", "draconicevolution:dragon_heart", "dragon heart"],
        ["departure_portal_scene", "draconicevolution:awakened_draconium_block", "your original world", "extendedcrafting:ultimate_singularity", "singularity"],
    ].forEach(values => {
        const [sceneName, targetBlock, targetDimension, withItem, withItemName] = values;
        event.create(targetBlock).scene(sceneName, "A portal to the " + targetDimension, (scene, util) => {
            scene.showStructure();
            
            scene.idle(10);
    
            scene.world.setBlocks([1, 0, 3, 4, 0, 3], targetBlock, false); // bottom
            scene.world.setBlocks([1, 1, 3, 1, 3, 3], targetBlock, false); // right
            scene.world.setBlocks([4, 1, 3, 4, 3, 3], targetBlock, false); // left
            scene.world.setBlocks([1, 4, 3, 4, 4, 3], targetBlock, false); // top
            scene.world.setBlocks([3, 1, 3, 2, 3, 3], "minecraft:nether_portal", false); // middle
    
            scene
                .text(60, `You can create a portal to go to the ${targetDimension}. You can activate it with a ${withItemName}`, [2.0, 2.5, 2.5])
                .colored(PonderPalette.RED)
                .placeNearTarget()
                .attachKeyFrame();
            scene
                .showControls(60, [2.5, 3, 2.5], "down")
                .rightClick()
                .withItem(withItem);
            
            
            scene.idle(60);
    
            scene.world.setBlocks([2, 1, 0, 2, 1, 2], "create:track", true);
            scene
                .text(60, "Your trains can travel through the portal", [2.0, 2.5, 2.5])
                .colored(PonderPalette.RED)
                .placeNearTarget()
                .attachKeyFrame();
            
            scene.idle(60);
        });
    });

});

