StartupEvents.registry('item', event => {  
    // Capacitors. Design taken from enderio
    event.create('grainy_capacitor', 'basic').texture('trainmaniacs:item/grainy_capacitor');
    event.create('decuplic_capacitor', 'basic').texture('trainmaniacs:item/decuplic_capacitor');
    event.create('octodecuplic_capacitor', 'basic').texture('trainmaniacs:item/octodecuplic_capacitor');

    // Flux-induced Iron
    event.create('raw_flux_induced_iron', 'basic').texture('trainmaniacs:item/raw_flux_induced_iron');
    event.create('flux_induced_iron', 'basic').texture('trainmaniacs:item/flux_induced_iron');

    // chips, from OpenComputers https://github.com/MightyPirates/OpenComputers/tree/master-MC1.12
    event.create("microchip_tier_1", "basic").texture('trainmaniacs:item/chip_tier_1');
    event.create("microchip_tier_2", "basic").texture('trainmaniacs:item/chip_tier_2');
    event.create("microchip_tier_3", "basic").texture('trainmaniacs:item/chip_tier_3');
    event.create("unfinished_microchip_tier_3", "basic").texture('trainmaniacs:item/unfinished_chip_tier_3');

    // knowledge
    event.create('knowledge_of_the_sky', 'basic').texture('trainmaniacs:item/knowledge_of_the_sky');
    event.create('knowledge_of_hell', 'basic').texture('trainmaniacs:item/knowledge_of_hell');
    event.create('knowledge_of_the_mines', 'basic').texture('trainmaniacs:item/knowledge_of_the_mines');
    event.create('knowledge_of_the_galaxies', 'basic').texture('trainmaniacs:item/knowledge_of_the_galaxies');
    event.create('fragment_of_knowledge_of_the_sky', 'basic').texture('trainmaniacs:item/fragment_of_knowledge_of_the_sky');
    event.create('fragment_of_knowledge_of_hell', 'basic').texture('trainmaniacs:item/fragment_of_knowledge_of_hell');
    event.create('fragment_of_knowledge_of_the_mines', 'basic').texture('trainmaniacs:item/fragment_of_knowledge_of_the_mines');
    event.create('fragment_of_knowledge_of_the_galaxies', 'basic').texture('trainmaniacs:item/fragment_of_knowledge_of_the_galaxies');
    
});