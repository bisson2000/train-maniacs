

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('test_item')
  
    // If you want to specify a different texture location you can do that too, like this:
    event.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
  
    // You can chain builder methods as much as you like
    event.create('test_item_2').maxStackSize(16).glow(true)
  
    // You can specify item type as 2nd argument in create(), some types have different available methods
    event.create('decuplic_capacitor', 'basic').texture('trainmaniacs:item/decuplic_capacitor');
    event.create('octodecuplic_capacitor', 'basic').texture('trainmaniacs:item/octodecuplic_capacitor');
})