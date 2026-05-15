import type { Context } from "grammy";
import { db } from "../db/client.js";
import { users } from "../db/schemas/registry.js";
import { eq } from "drizzle-orm";

export const startHandler = async (ctx: Context) => {
    // Получаем данные пользователя из Telegram
    const telegramId = ctx.from?.id.toString();
    const userName = ctx.from?.username;
    const firstName = ctx.from?.first_name;

    if (!telegramId) {
        await ctx.reply("❌ Не удалось определить пользователя.");
        return;
    }

    try {
        // Асинхронно проверяем, есть ли пользователь в БД
        const existingUser = await db.query.users.findFirst({
            where: eq(users.tgUserId, telegramId)
        });

        if (!existingUser) {
            // Пользователь не найден — сохраняем в базу
            await db.insert(users).values({
                tgUserId: telegramId,
                userName: userName || null,
                firstName: firstName || null,
                isActive: true,
            });

            await ctx.reply(
                "🤖 Привет! Я бот на TypeScript!\n\n" +
                "Поздрвляю с регистрацией"
            );
        } else if (!existingUser.isActive) {
            // Пользователь есть, но помечен как неактивный — реактивируем
            await db.update(users)
                .set({ 
                    isActive: true,
                    userName: userName || existingUser.userName,
                    firstName: firstName || existingUser.firstName,
                })
                .where(eq(users.tgUserId, telegramId));

            await ctx.reply(
                "🤖 Привет! Я бот на TypeScript!\n\n" +
                "👋 Рад снова тебя видеть"
            );
        } else {
            // Пользователь уже существует и активен
            await ctx.reply(
                "🤖 Привет! Я бот на TypeScript!"
            );
        }
    } catch (error) {
        console.error("❌ Ошибка при работе с базой данных:", error);
        await ctx.reply(
            "⚠️ Произошла ошибка при подключении к базе данных."
        );
    }
};