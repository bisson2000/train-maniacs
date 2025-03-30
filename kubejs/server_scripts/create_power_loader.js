// priority: 0

ServerEvents.recipes(event => {

    // chunk loaders

    event.recipes.thermal.bottler(["create_power_loader:andesite_chunk_loader"], ["create_power_loader:empty_andesite_chunk_loader", Fluid.of("thermal:ender", 250)]);
    event.recipes.thermal.bottler(["create_power_loader:brass_chunk_loader"], ["create_power_loader:empty_brass_chunk_loader", Fluid.of("thermal:ender", 250)]);

});