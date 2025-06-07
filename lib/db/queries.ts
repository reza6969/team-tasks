import db from "@/lib/db/config";
import { columns, tasks } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

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

export async function createTask(data: {
  title: string;
  description?: string;
  columnId: number;
}) {
  await delay(ARTIFICIAL_DELAY);
  // Calculate the next order value for the given columnId
  const existingTasks = await db.select().from(tasks).where(eq(tasks.columnId, data.columnId));
  let order = 0;
  if (existingTasks.length > 0) {
    order = Math.max(...existingTasks.map(t => t.order)) + 1;
  }
  const [task] = await db.insert(tasks).values({
    title: data.title,
    description: data.description,
    order,
    columnId: data.columnId,
  }).returning();
  return task;
}