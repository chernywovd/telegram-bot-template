import type { Context } from "grammy";

export const textHandler = async (ctx: Context) => {
    const userMessage = ctx.message?.text;
    if (userMessage) {
        await ctx.reply(`📢 Ты написал: "${userMessage}"`);
    }
};