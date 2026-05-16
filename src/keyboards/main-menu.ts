import { Keyboard } from "grammy";

export const mainMenu = new Keyboard()
    .text("📋 Меню")
    .text("ℹ️ О боте")
    .row()
    .text("⚙️ Настройки");