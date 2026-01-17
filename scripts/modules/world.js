import { world, system, BlockLocation } from "@minecraft/server";

export function run(player, tags) {
    const vel = player.getVelocity();

    // 1. FLY BYPASS (Anti-Kick)
    if (tags.includes("gm_fly")) {
        player.setVelocity({ x: vel.x, y: 0.02, z: vel.z });
        if (system.currentTick % 20 === 0) player.applyKnockback(0, 0, 0, 0.05);
    }

    // 2. SPEED (Bypass)
    if (tags.includes("gm_speed")) {
        const dir = player.getViewDirection();
        player.setVelocity({ x: dir.x * 0.5, y: vel.y, z: dir.z * 0.5 });
    }

    // 3. SCAFFOLD (Авто-бриджинг)
    if (tags.includes("gm_scaffold")) {
        const blockBelow = player.dimension.getBlock({ x: player.location.x, y: player.location.y - 1, z: player.location.z });
        if (blockBelow?.isValid() && blockBelow.isAir) {
            blockBelow.setType("minecraft:wool"); // Или любой блок из инвентаря
        }
    }

    // 4. WATER WALK (Jesus)
    if (tags.includes("gm_jesus")) {
        const block = player.dimension.getBlock(player.location);
        if (block?.typeId === "minecraft:water") player.setVelocity({ x: vel.x, y: 0.1, z: vel.z });
    }
}
