// priority: 0

ServerEvents.recipes(event => {

    event.replaceInput({mod: "storagedrawers", id: "storagedrawers:iron_storage_upgrade"}, "storagedrawers:upgrade_template", "storagedrawers:obsidian_storage_upgrade");
    event.replaceInput({mod: "storagedrawers", id: "storagedrawers:gold_storage_upgrade"}, "storagedrawers:upgrade_template", "storagedrawers:iron_storage_upgrade");
    event.replaceInput({mod: "storagedrawers", id: "storagedrawers:diamond_storage_upgrade"}, "storagedrawers:upgrade_template", "storagedrawers:gold_storage_upgrade");
    event.replaceInput({mod: "storagedrawers", id: "storagedrawers:emerald_storage_upgrade"}, "storagedrawers:upgrade_template", "storagedrawers:diamond_storage_upgrade");

});