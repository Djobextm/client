import { world, system } from "@minecraft/server";

const Gemini = {
    modules: {
        aura: true, reach: 7.5, hitbox: 1.5,
        fly: "Bypass", speed: 1.5, esp: true,
        nbt_stick: true, nofall: true, phase: true
    }
};

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        // ESP (Visuals)
        if (Gemini.modules.esp) {
            world.getAllPlayers().forEach(other => {
                if (other.id !== player.id) player.dimension.spawnParticle("minecraft:blue_flame_particle", other.location);
            });
        }
        // NBT Editor (Exploits) - Активация палкой из манифеста
        const inv = player.getComponent("inventory").container;
        const item = inv.getItem(player.selectedSlot);
        if (Gemini.modules.nbt_stick && item?.typeId === "minecraft:stick") {
            item.setLore(["§uGemini Editor", "§bGitHub Sync: OK", "§7Damage: 32767"]);
            inv.setItem(player.selectedSlot, item);
        }
        // Fly Bypass (Movement)
        if (Gemini.modules.fly === "Bypass" && system.currentTick % 10 === 0) {
            player.applyKnockback(0, 0, 0, 0.02);
        }
    }
}, 1);
