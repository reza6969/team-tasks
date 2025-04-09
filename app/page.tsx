import { KanbanBoard, Task } from "@/components/KanbanBoard"

export default function Home() {
  const sampleTasks: Task[] = [
    {
      id: "1",
      title: "Implement Authentication",
      description: "Set up user authentication using NextAuth.js",
      status: "todo",
    },
    {
      id: "2",
      title: "Design Dashboard",
      description: "Create wireframes for the main dashboard",
      status: "in-progress",
    },
    {
      id: "3",
      title: "Setup Database",
      description: "Initialize and configure the database",
      status: "done",
    },
  ]

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Project Tasks</h1>
      <KanbanBoard tasks={sampleTasks} />
    </main>
  )
}
