// priority: 0

// Visit the wiki for more info - https://kubejs.com/
ServerEvents.recipes(event => {

    // hammer recipes
    event.forEachRecipe({mod: "immersiveengineering", input:"immersiveengineering:hammer"}, recipe => {
        if (recipe.getId() != "immersiveengineering:crafting/survey_tools" 
        && recipe.getId() != "immersiveengineering:crafting/gunpart_barrel") {
            recipe.remove();
        }
    });

    // rods
    [
        ["immersiveengineering:metalpress/rod_aluminum"],
        ["immersiveengineering:metalpress/rod_electrum"],
        ["immersiveengineering:metalpress/rod_brass"],
        ["immersiveengineering:metalpress/rod_steel"],
        ["immersiveengineering:metalpress/rod_copper"],
        ["immersiveengineering:metalpress/rod_gold"],
        ["immersiveengineering:metalpress/rod_iron"],
        ["immersiveengineering:crafting/stick_iron"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "immersiveengineering", id: recipeID});
    });

    // mechanical components
    [
        ["immersiveengineering:crafting/component_steel"],
        ["immersiveengineering:crafting/component_iron"],
    ].forEach((replacementInfo) => {
        const [recipeID] = replacementInfo;
        event.remove({mod: "immersiveengineering", id: recipeID});
    });

    // Capacitors, aka accumulator
    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/capacitor_lv"});
    event.shaped(Item.of("immersiveengineering:capacitor_lv", 1), // arg 1: output
    [
      'LLL',
      'WSW', // arg 2: the shape (array of strings)
      'TCT'
    ],
    {
      L: '#forge:plates/lead',
      W: 'immersiveengineering:wirecoil_copper',
      T: '#forge:treated_wood',
      C: 'immersiveengineering:clinker_brick',
      S: "immersiveengineering:sheetmetal_iron"
    });

    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/capacitor_mv"});
    event.shaped(Item.of("immersiveengineering:capacitor_mv", 1), // arg 1: output
    [
      'BBB',
      'WSW', // arg 2: the shape (array of strings)
      'TCT'
    ],
    {
      B: '#forge:plates/bronze',
      W: 'immersiveengineering:wirecoil_electrum',
      T: '#forge:treated_wood',
      C: 'immersiveengineering:clinker_brick',
      S: "immersiveengineering:capacitor_lv"
    });

    event.remove({mod: "immersiveengineering", id: "immersiveengineering:crafting/capacitor_hv"});
    event.shaped(Item.of("immersiveengineering:capacitor_hv", 1), // arg 1: output
    [
      'BBB',
      'WSW', // arg 2: the shape (array of strings)
      'TCT'
    ],
    {
      B: '#forge:plates/aluminum',
      W: 'immersiveengineering:wirecoil_electrum_ins',
      T: '#forge:treated_wood',
      C: 'immersiveengineering:clinker_brick',
      S: "immersiveengineering:capacitor_mv"
    });

});