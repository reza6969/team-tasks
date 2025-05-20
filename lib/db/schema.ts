import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const columns = pgTable('columns', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  order: integer('order').notNull(),
});

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  order: integer('order').notNull(),
  columnId: integer('column_id').references(() => columns.id, { onDelete: 'cascade' }).notNull(),
});