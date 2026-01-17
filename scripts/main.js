import { world, system } from "@minecraft/server";
import * as combat from "./modules/combat.js";
import * as worldMod from "./modules/world.js";
import * as playerMod from "./modules/player.js";
import * as misc from "./modules/misc.js";

// Глобальное хранилище состояний (управляется через твою ClickGUI)
const Gemini = {
    modules: {
        killaura: false, reach: 7, fly: false, 
        esp: false, hitbox: 1, speed: 1
    }
};

// Основной поток (Tick Loop)
system.runInterval(() => {
    const players = world.getAllPlayers();
    if (players.length === 0) return;

    const local = players[0];

    // Вызов обработчиков из модулей
    if (Gemini.modules.killaura) combat.runAura(local, Gemini.modules.reach);
    if (Gemini.modules.fly) worldMod.runFly(local);
    if (Gemini.modules.esp) misc.runESP(local);
    
    // Синхронизация с ClickGUI (через динамические свойства или теги)
    syncWithGUI(local);
}, 1);

function syncWithGUI(player) {
    // Читаем теги, которые вешает твоя ClickGUI (Kotlin) на игрока
    const tags = player.getTags();
    Gemini.modules.killaura = tags.includes("gm_aura_on");
    Gemini.modules.fly = tags.includes("gm_fly_on");
    Gemini.modules.esp = tags.includes("gm_esp_on");
}
