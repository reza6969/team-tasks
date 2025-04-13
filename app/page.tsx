"use client"

import { KanbanBoard, Task } from "../components/KanbanBoard"

export default function Home() {
  const sampleTasks: Task[] = [
    {
      id: "1",
      title: "Implement Authentication",
      description: "Set up user authentication using NextAuth.js",
      status: "todo",
      assignee: {
        id: "1",
        name: "Alice Smith",
        email: "alice@example.com",
        avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=alice"
      }
    },
    {
      id: "2",
      title: "Design Dashboard",
      description: "Create wireframes for the main dashboard",
      status: "in-progress",
      assignee: {
        id: "2",
        name: "Bob Johnson",
        email: "bob@example.com",
        avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=bob"
      }
    },
    {
      id: "3",
      title: "Setup Database",
      description: "Initialize and configure the database",
      status: "done",
      assignee: {
        id: "3",
        name: "Carol Williams",
        email: "carol@example.com",
        avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=carol"
      }
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
