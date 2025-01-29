StartupEvents.registry('item', event => {  
    // Capacitors
    event.create('grainy_capacitor', 'basic').texture('trainmaniacs:item/grainy_capacitor');
    event.create('decuplic_capacitor', 'basic').texture('trainmaniacs:item/decuplic_capacitor');
    event.create('octodecuplic_capacitor', 'basic').texture('trainmaniacs:item/octodecuplic_capacitor');

    // Flux-induced Iron
    event.create('raw_flux_induced_iron', 'basic').texture('trainmaniacs:item/raw_flux_induced_iron');
    event.create('flux_induced_iron', 'basic').texture('trainmaniacs:item/flux_induced_iron');
})