import db from "@/lib/db/config";
import { columns, tasks } from "@/lib/db/schema";

const ARTIFICIAL_DELAY = 3000; // 3 seconds in milliseconds

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getColumns() {
    await delay(ARTIFICIAL_DELAY);
    return await db.select().from(columns).orderBy(columns.order);
}

export async function getTasks() {
    await delay(ARTIFICIAL_DELAY);
    return await db.select().from(tasks).orderBy(tasks.columnId);
}