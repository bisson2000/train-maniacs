

// List of abilities:
// everlasting abilities, remove totem from natural spawning. Done in datapack
// There are 711 quests
// there are 32 rewards, some of which are more repeatable than others. can claim a total of 159
// Say we reward 700 quests
// Say we want the player to unlock everything with 650 quests only
// with a base value of 5, we have to split 3250
// 3250 / 159 = 20.4. Make it base 20 per skill
// So 159 rewards * 20 = 3180

/**
 * command                                                                                                                                                                          max lvl         price/lvl   total
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:attribute_modifier/attack_steroids", level: 1 }] }       max 10          10          100
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:attribute_modifier/block_range", level: 1 }] }           Not in 1.20     
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:attribute_modifier/heart_gainer", level: 1 }] }          max 50          15          750
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:attribute_modifier/hidden_chestplate", level: 1 }] }     max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:attribute_modifier/knockback", level: 1 }] }             max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:attribute_modifier/impacting_legs", level: 1 }] }        Not in 1.20
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/absorption", "level": 1 }]}                       max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/bad_omen_self", "level": 1 }]}                    max 4           1           4
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/conduit_power", "level": 1 }]}                    max 3           10          30
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/dolphins_grace", "level": 1 }]}                   max 1           100         100
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/fire_resistance", "level": 1 }]}                  max 1           100         100
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/haste", level: 1 }] }                             max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/hero_of_the_village", level: 1 }] }               max 3           10          30
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/jump_boost", "level": 1 }]}                       max 5           5           25
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/luck", "level": 1 }]}                             max 3           10          30
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/night_vision", "level": 1 }]}                     max 1           200         200
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/regeneration", "level": 1 }]}                     max 3           20          60
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/resistance", "level": 1 }]}                       max 3           20          60
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/saturation", "level": 1 }]}                       max 3           50          150
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/slow_falling", "level": 1 }]}                     max 1           1           1
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/speed", "level": 1 }]}                            max 5           5           25
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/strength", "level": 1 }]}                         max 5           15          75
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/unluck", "level": 1 }]}                           max 3           1           3
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/water_breathing", "level": 1 }]}                  max 1           50          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/glowing", "level": 1 }]}                          max 3           1           3
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/slowness", "level": 1 }]}                         max 3           5           15
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:effect/weakness", "level": 1 }]}                         max 3           10          30
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/flight", "level": 1 }]}                          max 1           1000        1000
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/mining_fatigue", "level": 1 }]}                  max 3           1           3
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/bonemealer", level: 1 }] }                       max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/fertility", level: 1 }] }                        max 3           10          30
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/magnetize", level: 1 }] }                        max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/power_stare", level: 1 }] }                      max 5           10          50
 * /give @s everlastingabilities:ability_totem{ "everlastingabilities:abilityStoreStack": [{ "name": "everlastingabilities:special/step_assist", level: 1 }] }                      max 3           5           15
 * 
 *                                                                                                                                                          32                      159                         3239
 * 
 */