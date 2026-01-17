import { world, system } from "@minecraft/server";

export const Fly = {
    onTick(player, settings) {
        if (!settings.active) return;
        if (settings.mode === "Bypass" && system.currentTick % 10 === 0) {
            player.applyKnockback(0, 0, 0, settings.speed); // Мелкий импульс для обхода
        }
    }
};

export const Speed = {
    onTick(player, settings) { /* ... */ }
};

export const Step = {
    onTick(player, settings) { /* ... */ }
};

export const Spider = {
    onTick(player, settings) { /* ... */ }
};

export const NoSlow = {
    onTick(player, settings) { /* ... */ }
};

export const Scaffold = {
    onTick(player, settings) { /* ... */ }
};

export const WaterWalk = {
    onTick(player, settings) { /* ... */ }
};

export const Jetpack = {
    onTick(player, settings) { /* ... */ }
};

export const Glide = {
    onTick(player, settings) { /* ... */ }
};

export const Blink = {
    onTick(player, settings) { /* ... */ }
};

export const Phase = {
    onTick(player, settings) { /* ... */ }
};

export const Teleport = {
    onTick(player, settings) { /* ... */ }
};
