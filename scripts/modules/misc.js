import { world } from "@minecraft/server";

export const ESP = {
    onTick(player, settings) {
        if (!settings.active) return;
        world.getAllPlayers().forEach(other => {
            if (other.id !== player.id) {
                player.dimension.spawnParticle("minecraft:blue_flame_particle", other.location); // Box ESP
            }
        });
    }
};

export const Tracers = {
    onTick(player, settings) { /* ... */ }
};

export const NameTags = {
    onTick(player, settings) { /* ... */ }
};

export const XRay = {
    onTick(player, settings) { /* ... */ }
};

export const FullBright = {
    onTick(player, settings) { /* ... */ }
};

export const Waypoints = {
    onTick(player, settings) { /* ... */ }
};

export const Search = {
    onTick(player, settings) { /* ... */ }
};

export const NoOverlay = {
    onTick(player, settings) { /* ... */ }
};

export const Trails = {
    onTick(player, settings) { /* ... */ }
};

export const AntiKick = {
    onTick(player, settings) { /* ... */ }
};
