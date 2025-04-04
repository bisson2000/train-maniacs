LootJS.modifiers((event) => {
    
    // Aether bosses
    event.addEntityLootModifier("aether:valkyrie_queen").addLoot("kubejs:knowledge_of_the_sky");
    event.addEntityLootModifier("aether:sun_spirit").addLoot("kubejs:knowledge_of_hell");
    event.addEntityLootModifier("aether:slider").addLoot("kubejs:knowledge_of_the_mines");
    event.addEntityLootModifier("lost_aether_content:aerwhale_king").addLoot("kubejs:knowledge_of_the_galaxies");

    // end remastered
    // 16 eyes, we need 12
    // we are keeping 6 in total, including evil eye (cleric trade)
    // Cryptic eye is not kept
    // need to assign 6
    event.addLootTableModifier("minecraft:chests/buried_treasure").removeLoot("endrem:black_eye");
    event.addLootTableModifier("minecraft:chests/igloo_chest").removeLoot("endrem:cold_eye");
    event.addLootTableModifier("minecraft:chests/pillager_outpost").removeLoot("endrem:corrupted_eye");
    //event.addLootTableModifier("minecraft:chests/bastion_treasure").removeLoot("endrem:cursed_eye"); // kept as is
    // event.addEntityLootModifier("minecraft:elder_guardian").removeLoot("endrem:guardian_eye"); // kept
    event.addLootTableModifier("minecraft:chests/abandoned_mineshaft").removeLoot("endrem:lost_eye");
    // event.addLootTableModifier("minecraft:chests/woodland_mansion").removeLoot("endrem:magical_eye");
    // event.addEntityLootModifier("minecraft:evoker").removeLoot("endrem:magical_eye"); // kept
    event.addLootTableModifier("minecraft:chests/nether_bridge").removeLoot("endrem:nether_eye");
    event.addLootTableModifier("minecraft:chests/desert_pyramid").removeLoot("endrem:old_eye");
    event.addLootTableModifier("minecraft:chests/jungle_temple").removeLoot("endrem:rogue_eye");
    event.addEntityLootModifier("minecraft:skeleton_horse").removeLoot("endrem:undead_soul");
    //event.addEntityLootModifier("minecraft:witch").removeLoot("endrem:witch_pupil"); // kept
    //event.addEntityLootModifier("minecraft:wither").removeLoot("endrem:wither_eye"); // kept
    // witch eye kept

    // new bosses have the eyes
    event.addEntityLootModifier("cataclysm:ancient_remnant").addLoot("endrem:old_eye");
    event.addEntityLootModifier("cataclysm:netherite_monstrosity").addLoot("endrem:corrupted_eye");
    event.addEntityLootModifier("cataclysm:the_harbinger").addLoot("endrem:lost_eye");
    event.addEntityLootModifier("cataclysm:the_leviathan").addLoot("endrem:cryptic_eye");
    event.addEntityLootModifier("cataclysm:ignis").addLoot("endrem:nether_eye");
    event.addEntityLootModifier("cataclysm:maledictus").addLoot("endrem:cold_eye");
});
