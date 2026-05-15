import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './client.js';

async function main() {
    console.log('🔄 Запуск миграций...');
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('✅ Миграции выполнены успешно!');
    process.exit(0);
}

main().catch((err) => {
    console.error('❌ Ошибка миграции:', err);
    process.exit(1);
});