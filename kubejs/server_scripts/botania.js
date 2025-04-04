// priority: 0

ServerEvents.recipes(event => {

    // Remove orechids
    event.remove({mod: "botania", id:"botania:petal_apothecary/orechid"});
    event.remove({mod: "botania", id:"botania:petal_apothecary/orechid_ignem"});
    event.remove({mod: "botania", id:"botania:floating_orechid"});
    event.remove({mod: "botania", id:"botania:floating_orechid_ignem"});
    event.remove({mod: "botania", type:"botania:orechid"});
    event.remove({mod: "botania", type:"botania:orechid_ignem"});

});