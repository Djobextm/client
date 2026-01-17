import { world } from "@minecraft/server";

export function run(player, tags) {
    // 1. ESP BOX (Visuals)
    if (tags.includes("gm_esp")) {
        for (const p of world.getAllPlayers()) {
            if (p.id === player.id) continue;
            // Рисуем рамку частицами
            for (let i = 0; i < 2; i += 0.5) {
                player.dimension.spawnParticle("minecraft:basic_flame_particle", { x: p.location.x, y: p.location.y + i, z: p.location.z });
            }
        }
    }

    // 2. FULL BRIGHT
    if (tags.includes("gm_fullbright")) {
        player.addEffect("night_vision", 30, { showParticles: false });
    }
}
