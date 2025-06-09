# Frontend & Forms

## Forms

- Use React Hook From always, suggest installing if not installed yet.
- Always create a function that handles the form submission
- Example submission function:

```ts
function handleSubmit(data: TaskFormValues) {
    onSubmit?.(data)
    onOpenChange?.(false)
    form.reset()
}
```

- The form data should be typed, you can  infer the type frome ZOD schema, for example:

```ts
export const taskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  status: z.enum(["todo", "in-progress", "done"]),
  description: z.string().optional(),
  assigneeId: z.string().optional(),
  columnId: z.number(),
});
export type TaskFormValues = z.infer<typeof taskFormSchema>;
```

- Try to reuse existing froms for edit form, when a form for resource creation exists

## Validation

- Always validate the data on the client
- Always use ZOD
- Suggest installing ZOD if not installed yet
- Always create schema inside @schema.ts
- Try to use existing schemas when possible

## UI Components

- Always use Shadcn/UI
- Suggest installing missing components
- Always use Shadcn/UI for forms

## Component Examples

- when nedding a dialog, model after @TaskDialog.tsx
- when needing a form, model after @task-form.tsx
