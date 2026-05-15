import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core';

// Таблица пользователей
export const users = pgTable('users', {
  userId: serial('user_id').primaryKey(),
  tgUserId: text('tg_user_id').notNull().unique(),
  userName: text('user_name'),
  firstName: text('first_name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  isActive: boolean('is_active').default(true).notNull(),
});