import { fetchColumns, fetchTasks, Task, Column } from "@/lib/tasks"
import { KanbanClientWrapper } from "../components/KanbanClientWrapper"

export default async function Home() {
  const tasks: Task[] = await fetchTasks()
  const columns: Column[] = await fetchColumns()

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Project Tasks</h1>
      <KanbanClientWrapper tasks={tasks} columns={columns} />
    </main>
  )
}
