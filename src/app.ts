import { Bot } from "grammy";
import dotenv from "dotenv";
import { startHandler, helpHandler, textHandler } from "./handlers/registry";

// Загружаем переменные окружения
dotenv.config();

// Проверяем наличие токена
const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) {
    console.error("❌ BOT_TOKEN не найден в .env файле!");
    process.exit(1);
}

const bot = new Bot(BOT_TOKEN);

// Регистрация хендлеров
bot.command("start", startHandler);
bot.command("help", helpHandler);
bot.on("message:text", textHandler);

// Запуск бота
bot.start();
console.log("✅ Бот успешно запущен!");