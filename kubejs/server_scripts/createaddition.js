// priority: 0

ServerEvents.recipes(event => {

    [
        ["createaddition:gold_wire"],
        ["createaddition:iron_wire"],
        ["immersiveengineering:wire_copper"],
        ["immersiveengineering:wire_electrum"],
        ["immersiveengineering:wire_steel"],
        ["immersiveengineering:wire_lead"],
    ].forEach((replacementInfo) => {
        const [outputItem] = replacementInfo;
        event.remove({mod: "createaddition", type:"createaddition:rolling", output: outputItem});
    });

});