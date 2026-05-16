# 🤖 Telegram Bot Template

Шаблон Telegram бота на TypeScript с PostgreSQL и Drizzle ORM.

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- PostgreSQL 14+

### Установка

\`\`\`bash
git clone <your-repo-url>
cd TelegramBot
npm install
cp .env.example .env
\`\`\`

### Настройка

1. Получи токен у [@BotFather](https://t.me/botfather)
2. Заполни `.env`:
   \`\`\`
   BOT_TOKEN=твой_токен
   DATABASE_URL=postgresql://postgres:пароль@localhost:5432/TgBot
   \`\`\`

### Запуск

\`\`\`bash
npm run db:generate  # Сгенерировать миграции
npm run db:migrate   # Применить миграции
npm run dev          # Запустить бота
\`\`\`

## 📦 Команды бота

| Команда | Описание |
|---------|----------|
| `/start` | Начать работу и регистрация в БД |
| `/help`  | Помощь |

## 🛠️ Технологии

- [TypeScript](https://www.typescriptlang.org/)
- [grammY](https://grammy.dev/) — Telegram Bot Framework
- [Drizzle ORM](https://orm.drizzle.team/) — работа с PostgreSQL
- [tsx](https://tsx.is/) — запуск TypeScript

## 📁 Структура проекта

\`\`\`
src/
├── app.ts                 # Точка входа
├── db/
│   ├── client.ts          # Клиент БД
│   ├── migrate.ts         # Миграции
│   └── schemas/
│       ├── users.ts       # Схема пользователей
│       └── registry.ts    # Сборник схем
├── handlers/
│   ├── registry.ts        # Сборник хендлеров
│   ├── start.ts
│   ├── help.ts
│   └── message.ts
└── types/
    └── definitions.ts     # Типы TypeScript
\`\`\`

## 📝 Лицензия

MIT