import { world, system } from "@minecraft/server";
import * as combat from "./modules/combat.js";
import * as worldMod from "./modules/world.js";
import * as player from "./modules/player.js";
import * as misc from "./modules/misc.js";

system.runInterval(() => {
    const players = world.getAllPlayers();
    if (players.length === 0) return;
    
    const local = players[0];
    const tags = local.getTags(); // ClickGUI управляет тегами через Kotlin

    try {
        combat.run(local, tags);
        worldMod.run(local, tags);
        player.run(local, tags);
        misc.run(local, tags);
    } catch (e) {
        // Ошибки не должны крашить чит
    }
}, 1);
