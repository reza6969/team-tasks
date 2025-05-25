"use server"

import { taskFormSchema } from "@/lib/tasks"
import { createTask } from "@/lib/db/queries"

export async function createTaskAction(formData: unknown) {
  const result = taskFormSchema.safeParse(formData)
  if (!result.success) {
    return { error: result.error.flatten() }
  }
  const { title, description, status } = result.data

  // Map status to columnId (example: you may want to fetch columns from db)
  // For now, let's assume: todo=1, in-progress=2, done=3
  const statusToColumnId = { "todo": 1, "in-progress": 2, "done": 3 }
  const columnId = statusToColumnId[status]

  // For order, you may want to fetch the current max order in the column
  // For now, just use 0
  const order = 0

  const created = await createTask({
    title,
    description,
    order,
    columnId,
  })
  return { task: created }
} 