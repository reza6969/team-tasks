import { defineConfig } from "drizzle-kit";
// import { Schema } from 'zod';

export default defineConfig({
    schema: "./lib/db/schema.ts",
    out: "./drizzle",
    dialect: 'postgresql',
    // dbCredentials: {
    //     url: process.env.DB_URL!,
    // },
    dbCredentials: {
        host: process.env.POSTGRES_HOST || 'localhost',
        port: Number(process.env.POSTGRES_PORT) || 5432,
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'postgres',
        database: process.env.POSTGRES_DB || 'teamtasks',
        // Add this line to disable SSL
        ssl: false,
        // Or potentially this line depending on the underlying driver
        // sslmode: 'disable',
    },
    verbose: true,
    strict: true,
});