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
});