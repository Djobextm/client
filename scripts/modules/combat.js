import { world, system, EntityDamageCause } from "@minecraft/server";

export function run(player, tags) {
    // 1-10. KILL AURA & MULTI-AURA
    if (tags.includes("gm_aura")) {
        const range = tags.includes("gm_reach") ? 8 : 4.5;
        const targets = player.dimension.getEntities({
            location: player.location,
            maxDistance: range,
            excludeTypes: ["minecraft:item"]
        }).filter(e => e.id !== player.id);

        for (const target of targets) {
            target.applyDamage(5, { cause: EntityDamageCause.entityAttack, damagingEntity: player });
            // 11. CRITICALS (Имитация прыжка для сервера)
            if (tags.includes("gm_crit")) player.applyKnockback(0, 0, 0, 0.1);
            if (!tags.includes("gm_multiaura")) break;
        }
    }

    // 12. AUTO TOTEM
    if (tags.includes("gm_autototem")) {
        const inv = player.getComponent("inventory").container;
        const offhand = player.getComponent("equippable").getEquipment("Offhand");
        if (!offhand || offhand.typeId !== "minecraft:totem_of_undying") {
            for (let i = 0; i < inv.size; i++) {
                let item = inv.getItem(i);
                if (item?.typeId === "minecraft:totem_of_undying") {
                    // Логика перемещения предмета через Native API (Yurai)
                }
            }
        }
    }
}
