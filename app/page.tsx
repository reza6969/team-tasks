"use client"

import { KanbanBoard, Task } from "../components/KanbanBoard"
import { assignees } from "@/lib/data"

export default function Home() {
  const sampleTasks: Task[] = [
    {
      id: "1",
      title: "Implement Authentication",
      description: "Set up user authentication using NextAuth.js",
      status: "todo",
      assignee: assignees.find(a => a.id === "1"),
    },
    {
      id: "2",
      title: "Design Dashboard",
      description: "Create wireframes for the main dashboard",
      status: "in-progress",
      assignee: assignees.find(a => a.id === "2"),
    },
    {
      id: "3",
      title: "Setup Database",
      description: "Initialize and configure the database",
      status: "done",
      assignee: assignees.find(a => a.id === "3"),
    },
  ]

  const handleAssigneeChange = (taskId: string, userId: string) => {
    // In a real application, this would update the database
    console.log(`Assigning task ${taskId} to user ${userId}`)
  }

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Project Tasks</h1>
      <KanbanBoard tasks={sampleTasks} onAssigneeChange={handleAssigneeChange} />
    </main>
  )
}
