import * as z from "zod";

export const taskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  status: z.enum(["todo", "in-progress", "done"]),
  description: z.string().optional(),
  assigneeId: z.string().optional(),
  columnId: z.number(),
});

export type TaskFormValues = z.infer<typeof taskFormSchema>; 