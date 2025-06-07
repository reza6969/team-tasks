"use server"

import { taskFormSchema, TaskFormValues } from "@/lib/zod-schemas"
import { createTask } from "@/lib/db/queries"

export async function createTaskAction(formData: TaskFormValues) {
  const result = taskFormSchema.safeParse(formData)
  if (!result.success) {
    console.log("Error: "+result.error.flatten().fieldErrors);
    return { error: result.error.flatten() }
  }
  const { title, description, assigneeId, columnId } = result.data

  // For order, you may want to fetch the current max order in the column
  // For now, just use 0
  const order = 0

  try {
    const created = await createTask({
      title,
      description,
      order,
      columnId,
      assigneeId,
    })
    return { task: created }
  } catch (error) {
    return { error: (error instanceof Error ? error.message : "Unknown error") }
  }
} 