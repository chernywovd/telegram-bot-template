import type { Context } from "grammy";

export const helpHandler = async (ctx: Context) => {
    await ctx.reply(
        "📖 Помощь:\n\n" +
        "1. Напиши любой текст - я его повторю\n" +
        "2. /start - главное меню"
    );
};